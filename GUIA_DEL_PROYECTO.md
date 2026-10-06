# Guía del proyecto EntrePares UP

## 1. ¿Qué es EntrePares UP?

EntrePares UP es el prototipo de una plataforma de tutorías entre estudiantes de la Universidad
Politécnica de Chiapas (UPChiapas). Está construido con React, TypeScript, Vite y Tailwind CSS.
Actualmente contiene dos experiencias:

1. **Landing page:** presenta la propuesta, muestra cómo funciona el servicio y explica las
   modalidades de tutoría.
2. **Dashboard:** permite buscar tutores de demostración, filtrarlos por materia, guardarlos como
   favoritos y abrir un formulario de solicitud de tutoría.

La propuesta contempla tutorías individuales a $100 MXN por hora y grupales (2 a 5 alumnos) a $70
MXN por persona/hora. La aplicación es una interfaz de demostración: no cuenta todavía con servidor,
base de datos, autenticación, pagos ni persistencia de las solicitudes.

## 2. Requisitos

- **Node.js 20.19 o superior, o Node.js 22.12 o superior.** Son las versiones base indicadas para
  trabajar con este proyecto.
- **npm**, que se instala junto con Node.js.
- Conexión a Internet para instalar paquetes. También se necesita para cargar los retratos de
  tutores que actualmente se sirven desde Unsplash.
- Un navegador moderno.

Comprueba las versiones instaladas desde una terminal:

```bash
node --version
npm --version
```

Si `node` o `npm` no se reconocen, instala Node.js desde
[nodejs.org](https://nodejs.org/) y vuelve a abrir la terminal. En Windows, macOS o Linux también
puedes usar un administrador de versiones de Node.js si ya forma parte de tu entorno.

## 3. Instalación y ejecución local

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
cd "ruta/a/Proyecto Asesorias"
npm install
npm run dev
```

Por ejemplo, en el equipo donde se creó este proyecto:

```bash
cd "/home/nichan/Descargas/UPCHAMBAS/ROCIO/Proyecto Asesorias"
npm install
npm run dev
```

Vite mostrará una dirección local, normalmente <http://localhost:5173/>. Ábrela en el navegador.
Deja abierta la terminal mientras desarrollas; para detener el servidor, presiona `Ctrl+C`.

`npm install` descarga las dependencias declaradas en `package.json` y crea `node_modules/`. No es
necesario instalar React, Vite o Tailwind globalmente.

## 4. Comandos disponibles

```bash
npm install       # Instala las dependencias del proyecto
npm run dev       # Inicia el servidor local de desarrollo
npm run build     # Comprueba TypeScript y crea el build de producción en dist/
npm run preview   # Sirve localmente el build ya generado
```

Para revisar la versión de producción localmente:

```bash
npm run build
npm run preview
```

`preview` sirve el contenido de `dist/`; no reemplaza al servidor de desarrollo. No hay actualmente
un comando de pruebas automatizadas configurado en `package.json`.

## 5. Cómo funciona la aplicación

### Entrada y navegación

El navegador carga `index.html`, que contiene el elemento raíz de React. `src/main.tsx` monta la
aplicación y carga los estilos globales. `src/App.tsx` decide qué pantalla mostrar:

- Al abrir el sitio, se presenta la landing page.
- Al pulsar un botón para buscar un tutor, se muestra el dashboard.
- Si se elige una materia popular en la landing, se pasa esa búsqueda al dashboard para mostrar los
  resultados correspondientes.
- En el dashboard, el control “Volver al inicio” regresa a la landing.

La transición se administra con estado de React; no hay un router ni rutas URL separadas. Al cambiar
de pantalla, los componentes se montan y desmontan.

### Landing page

`src/pages/LandingPage.tsx` ensambla las secciones. Los componentes de `src/components/landing/`
contienen el encabezado, el hero con la imagen, la explicación en tres pasos, las modalidades, la
llamada a la acción y el pie de página.

Los botones “Buscar tutor” y “Buscar mi materia” abren el dashboard. Los botones de materias
populares también abren el dashboard con la búsqueda precargada.

### Dashboard

`src/pages/DashboardPage.tsx` organiza el encabezado, la bienvenida, el buscador, los filtros, la
lista de tutores y los paneles laterales. Los tutores de ejemplo se leen de `src/data/tutors.ts`.

- `src/components/TutorCard.tsx` muestra el perfil resumido de un tutor y permite alternar su
  favorito. Los favoritos solo existen en la memoria de la página y se pierden al salir de ella.
- `src/components/BookingDialog.tsx` permite elegir fecha, hora, modalidad individual o grupal,
  número de integrantes y lugar (Biblioteca UPChiapas, Cafetería, aulas vacías o Google Meet).
  Presenta una vista previa y avisa que los datos de transferencia se enviarían al confirmar en una
  versión conectada; actualmente no cobra ni guarda una solicitud real.
- `src/components/Sidebar.tsx` presenta la navegación y el acceso promocional para futuros tutores.
- La búsqueda compara el texto escrito con el nombre, la materia, la categoría y la universidad.
  Los filtros por categoría se aplican junto con la búsqueda.

Los perfiles mostrados son datos ficticios/de demostración de estudiantes de ITIID, LAGE e Ingeniería
Petrolera. Las tarifas y reseñas son ilustrativas, no ofertas verificadas. Sus imágenes, salvo la
imagen principal de la landing, se cargan desde URLs externas de Unsplash.

## 6. Estructura de carpetas y archivos

```text
Proyecto Asesorias/
├── public/
│   └── images/
│       └── hero-tutoria.png
├── src/
│   ├── components/
│   │   ├── landing/
│   │   │   ├── CtaSection.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Modalities.tsx
│   │   │   ├── SiteFooter.tsx
│   │   │   └── SiteHeader.tsx
│   │   ├── BookingDialog.tsx
│   │   ├── Sidebar.tsx
│   │   └── TutorCard.tsx
│   ├── data/
│   │   └── tutors.ts
│   ├── pages/
│   │   ├── DashboardPage.tsx
│   │   └── LandingPage.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Archivos en la raíz

- **`index.html`:** documento HTML inicial, idioma, metadatos y título de la pestaña.
- **`package.json`:** nombre y scripts del proyecto, dependencias y herramientas de desarrollo.
- **`package-lock.json`:** fija las versiones resueltas de dependencias para instalaciones
  reproducibles con npm. Consérvalo junto a `package.json`.
- **`vite.config.ts`:** configura Vite, el plugin de React y la integración de Tailwind CSS v4.
- **`tsconfig.json`:** archivo principal que enlaza las configuraciones de TypeScript de la app y de
  Vite.
- **`tsconfig.app.json`:** opciones de TypeScript para el código de React.
- **`tsconfig.node.json`:** opciones de TypeScript para la configuración de Vite.
- **`.gitignore`:** excluye dependencias instaladas, build, archivos locales y variables de entorno.

### Carpeta `public/`

Contiene archivos servidos directamente sin importarlos desde TypeScript. Por eso, la imagen
`public/images/hero-tutoria.png` se utiliza en el navegador como `/images/hero-tutoria.png`.

### Carpeta `src/`

- **`main.tsx`:** punto de entrada; crea la raíz React, monta `App` e importa el CSS global.
- **`App.tsx`:** controla el paso entre la landing y el dashboard, y transporta una búsqueda inicial
  opcional.
- **`index.css`:** importa Tailwind, declara la paleta y tipografía globales y contiene estilos base.
- **`pages/`:** pantallas completas de la aplicación.
  - **`LandingPage.tsx`:** compone las secciones de presentación.
  - **`DashboardPage.tsx`:** muestra y coordina búsqueda, filtros, tarjetas, favoritos y solicitud de
    tutoría.
- **`components/`:** elementos reutilizables de interfaz.
  - **`landing/`:** componentes visuales exclusivos de la landing.
  - **`BookingDialog.tsx`:** formulario modal para elegir fecha, hora, modalidad, integrantes y
    lugar de tutoría.
  - **`Sidebar.tsx`:** navegación lateral del dashboard.
  - **`TutorCard.tsx`:** tarjeta de perfil de tutor.
- **`data/tutors.ts`:** tipo TypeScript `Tutor`, categorías y perfiles locales de demostración.

### Carpetas generadas al trabajar

- **`node_modules/`:** dependencias instaladas por npm. No se edita manualmente ni se comparte como
  código fuente.
- **`dist/`:** resultado generado por `npm run build`, listo para publicar en un hosting estático.
  Se vuelve a generar con cada build.

## 7. Tecnologías y dependencias principales

- **React y React DOM:** interfaz y componentes.
- **TypeScript:** tipos estáticos para la aplicación.
- **Vite:** servidor de desarrollo y empaquetado de producción.
- **Tailwind CSS v4:** utilidades de estilos, integrado mediante `@tailwindcss/vite`.
- **Lucide React:** iconos utilizados en la interfaz.

Tailwind se inicializa con `@import "tailwindcss";` en `src/index.css`. La paleta y otras variables de
diseño se definen en el mismo archivo; no se necesita un `tailwind.config.js` para la configuración
actual.

## 8. Personalización habitual

- Para cambiar los tutores, sus precios, categorías o universidades, edita `src/data/tutors.ts`.
- Para modificar secciones o textos de la landing, edita `src/components/landing/` y
  `src/pages/LandingPage.tsx`.
- Para cambiar el comportamiento del buscador, los filtros, los favoritos o el flujo del formulario,
  revisa `src/pages/DashboardPage.tsx`.
- Para cambiar estilos globales, colores o fuentes, revisa `src/index.css`.
- Para sustituir la imagen principal, reemplaza `public/images/hero-tutoria.png` conservando el
  nombre, o actualiza la ruta en `src/components/landing/Hero.tsx`.

## 9. Limitaciones actuales y siguientes pasos

Esta versión no incluye backend ni base de datos. Los perfiles y las tutorías futuras son
demostrativos; iniciar sesión y enviar una solicitud no autentica a nadie ni reserva un horario.
Los favoritos y avisos tampoco persisten después de salir del dashboard o recargar el navegador.
Algunos enlaces de navegación son anclas visuales y no representan páginas completas.

Para convertir el prototipo en una plataforma operativa, habría que definir e integrar, al menos:

1. Un backend y una base de datos para usuarios, perfiles, disponibilidad, tutorías y reseñas.
2. Autenticación y autorización para los roles de estudiante y tutor.
3. Validación de disponibilidad en servidor para evitar reservas duplicadas.
4. Un proveedor de pagos, si el servicio cobrará por sesión.
5. Políticas de privacidad, términos, moderación y protección de datos.
6. Pruebas automatizadas y configuración de despliegue.

No guardes credenciales ni secretos en el código del frontend. Las variables que se exponen en una
aplicación de navegador no son secretas; las claves privadas deben permanecer en el backend.

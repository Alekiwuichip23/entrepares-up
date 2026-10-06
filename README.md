# EntrePares UP

Plataforma inicial de tutorías entre compas de la Universidad Politécnica de Chiapas (UPChiapas),
creada con React, TypeScript, Vite y Tailwind CSS v4.

La página de inicio presenta las tutorías entre pares y lleva al dashboard para explorar perfiles
de estudiantes de UPChiapas. El prototipo usa datos ficticios y tarifas de muestra: $100 MXN por
hora individual o $70 MXN por persona/hora en grupos de 2 a 5 alumnos.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Vite mostrará la dirección local en la terminal (por defecto, `http://localhost:5173`).

## Comandos disponibles

```bash
npm run dev       # Inicia el servidor local
npm run build     # Comprueba TypeScript y genera la versión de producción en dist/
npm run preview   # Sirve localmente la versión de producción
```

## Estructura

```text
src/
├── components/
│   ├── landing/      # Secciones de la landing page
│   └── ...           # Componentes compartidos del dashboard
├── data/             # Datos de ejemplo para el prototipo
├── pages/            # Vistas principales
├── App.tsx           # Componente raíz
├── index.css         # Tailwind y estilos globales
└── main.tsx          # Entrada de React
```

La landing usa su imagen principal desde `public/images/hero-tutoria.png`. El buscador y los filtros
incluyen Cálculo Diferencial, Cálculo Integral, Cálculo de Varias Variables, POO, Física 1 e Inglés.
Los favoritos y la vista previa del apartado funcionan localmente, pero no guardan datos ni realizan
pagos. Para un producto real, hace falta conectar autenticación, persistencia, disponibilidad y
transferencias a un backend.

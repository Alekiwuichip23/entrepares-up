import { Laptop, Library } from 'lucide-react'

const MODES = [
  {
    icon: Library,
    name: 'En la Biblioteca',
    description: 'Cubículos reservados dentro del campus. Llega, saluda y empiecen a resolver ejercicios juntos.',
    details: ['Ideal antes de exámenes', 'Pizarrón y material a la mano'],
  },
  {
    icon: Laptop,
    name: 'Por Google Meet',
    description: 'El enlace llega con tu confirmación. Comparte pantalla, apuntes y dudas desde casa.',
    details: ['Sin traslados', 'Horarios de noche y fin de semana'],
  },
]

export function Modalities() {
  return (
    <section id="modalidades" className="mx-auto flex max-w-6xl scroll-mt-20 flex-col gap-10 px-5 py-20 md:py-24">
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Modalidades</p>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Presencial o en línea, el mismo tutor.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {MODES.map((mode) => (
          <article key={mode.name} className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7">
            <mode.icon className="size-6 text-primary" aria-hidden="true" />
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-2xl font-bold">{mode.name}</h3>
              <p className="leading-relaxed text-muted-foreground">{mode.description}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {mode.details.map((detail) => (
                <li key={detail} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

import { CalendarCheck, Search, Video } from 'lucide-react'

const STEPS = [
  {
    icon: Search,
    title: 'Busca tu materia',
    description:
      'Escribe el nombre o la clave de la materia y compara tutores por calificación, carrera y horarios disponibles.',
  },
  {
    icon: CalendarCheck,
    title: 'Paga y agenda',
    description:
      'Elige el horario que te acomode y paga de forma segura. Recibes la confirmación al instante en tu correo.',
  },
  {
    icon: Video,
    title: 'Toma tu asesoría',
    description:
      'Reúnete en la Biblioteca del campus o conéctate por Google Meet desde donde estés. Tú decides.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 border-y border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-20 md:py-24">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Cómo funciona</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            De la duda a la asesoría en tres pasos.
          </h2>
        </div>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="font-heading text-6xl font-extrabold leading-none text-primary">
                  {index + 1}
                </span>
                {index < STEPS.length - 1 && (
                  <span aria-hidden="true" className="hidden h-px flex-1 border-t border-dashed border-border md:block" />
                )}
              </div>
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <step.icon className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground text-pretty">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

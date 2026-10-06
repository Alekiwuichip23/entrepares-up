import { ArrowRight, Star } from 'lucide-react'

type HeroProps = {
  onEnter: (query?: string) => void
}

const popularSubjects = [
  'Cálculo Diferencial',
  'Cálculo Integral',
  'Cálculo de Varias Variables',
  'Programación Orientada a Objetos (POO)',
  'Física 1',
  'Inglés',
]

export default function Hero({ onEnter }: HeroProps) {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-6xl scroll-mt-20 items-center gap-12 px-5 pb-20 pt-14 md:pt-20 lg:grid-cols-2 lg:gap-16"
    >
      <div className="flex flex-col gap-7">
        <p className="w-fit rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
          Entre compas de la UPChiapas
        </p>

        <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Pasa tus parciales sin colapsar:{' '}
          <span className="marker">explicado por quien ya pasó la materia.</span>
        </h1>

        <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
          ¿Cálculo ya te trae de encargo? Encuentra compas de UPChiapas que ya pasaron la materia y
          te explican con calma. Estudien en la Biblioteca, la Cafetería o por Google Meet.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => onEnter()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Buscar mi materia
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
          <a
            href="#como-funciona"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-6 text-base font-medium transition-colors hover:bg-muted"
          >
            Ver cómo funciona
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">Materias que nos cuestan a todos</p>
          <ul className="flex flex-wrap gap-2">
            {popularSubjects.map((subject) => (
              <li key={subject}>
                <button
                  type="button"
                  onClick={() => onEnter(subject)}
                  className="inline-flex rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
                >
                  {subject}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-3xl border border-border bg-muted">
          <img
            src="/images/hero-tutoria.png"
            alt="Dos estudiantes repasando apuntes durante una tutoría entre compas"
            width={1200}
            height={1200}
            className="aspect-[4/5] h-full w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        </div>

        <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lg shadow-foreground/5 sm:left-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-accent font-heading font-bold text-accent-foreground">
            MR
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Mariana López · ITIID</p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="size-3.5 fill-current text-primary" aria-hidden="true" />
              <span>4.9 · UPChiapas</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

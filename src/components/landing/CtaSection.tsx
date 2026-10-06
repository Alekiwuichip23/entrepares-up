import { ArrowRight } from 'lucide-react'

type CtaSectionProps = {
  onEnter: () => void
}

export default function CtaSection({ onEnter }: CtaSectionProps) {
  return (
    <section id="empezar" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-20 md:pb-24">
      <div className="flex flex-col gap-10 rounded-3xl bg-primary px-7 py-14 text-primary-foreground md:flex-row md:items-end md:justify-between md:px-14">
        <div className="flex max-w-xl flex-col gap-4">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            ¿Ya pasaste esa materia? Échale la mano a otro compa.
          </h2>
          <p className="leading-relaxed text-primary-foreground/80">
            Si estudias Ingeniería en Tecnologías de la Información e Innovación Digital (ITIID),
            Licenciatura en Administración y Gestión Empresarial (LAGE), Ingeniería Petrolera,
            Ingeniería Biomédica u otra carrera en UPChiapas, comparte lo que sabes y gana dinero
            extra ayudando a otros.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onEnter}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Encontrar un compa tutor
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
          <a
            href="#como-funciona"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-primary-foreground/30 bg-transparent px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Quiero dar asesorías
          </a>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function CtaSection() {
  return (
    <section id="empezar" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-20 md:pb-24">
      <div className="flex flex-col gap-10 rounded-3xl bg-primary px-7 py-14 text-primary-foreground md:flex-row md:items-end md:justify-between md:px-14">
        <div className="flex max-w-xl flex-col gap-4">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Tu próximo examen empieza con una buena asesoría.
          </h2>
          <p className="leading-relaxed text-primary-foreground/80">
            Crea tu cuenta con tu correo institucional y agenda tu primera tutoría hoy mismo.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-12 gap-2 bg-accent px-6 text-base text-accent-foreground [a]:hover:bg-accent/90',
            )}
          >
            Buscar tutor ahora
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            id="tutores"
            href="#"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'h-12 scroll-mt-24 border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
            )}
          >
            Quiero ser tutor
          </a>
        </div>
      </div>
    </section>
  )
}

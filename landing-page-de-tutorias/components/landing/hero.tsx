import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const POPULAR = ['Cálculo I', 'Física II', 'Programación', 'Contabilidad', 'Química Orgánica']

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:pt-20 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-7 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="w-fit rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
          Tutores que ya aprobaron tu materia
        </p>

        <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Esa materia que te preocupa, <span className="marker">explicada por otro estudiante.</span>
        </h1>

        <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
          Encuentra un tutor de tu propia universidad, agenda en minutos y toma tu asesoría en la
          Biblioteca o por Google Meet. Sin vueltas.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#empezar" className={cn(buttonVariants({ size: 'lg' }), 'h-12 gap-2 px-6 text-base')}>
            Buscar mi materia
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#como-funciona"
            className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'h-12 px-6 text-base')}
          >
            Ver cómo funciona
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">Lo más buscado esta semana</p>
          <ul className="flex flex-wrap gap-2">
            {POPULAR.map((subject) => (
              <li key={subject}>
                <a
                  href="#empezar"
                  className="inline-flex rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
                >
                  {subject}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both">
        <div className="overflow-hidden rounded-3xl border border-border bg-muted">
          <Image
            src="/images/hero-tutoria.png"
            alt="Dos estudiantes en la biblioteca de la universidad repasando apuntes durante una tutoría"
            width={1200}
            height={1200}
            priority
            className="aspect-[4/5] h-full w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        </div>

        <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lg shadow-foreground/5 sm:left-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-accent font-heading font-bold text-accent-foreground">
            MR
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Mariana R. · Tutora de Cálculo</p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="size-3.5 fill-current text-primary" aria-hidden="true" />
              <span>4.9 · Hoy 16:00 en Biblioteca</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

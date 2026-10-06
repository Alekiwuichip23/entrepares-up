import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { SITE } from '@/lib/site'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#tutores', label: 'Sé tutor' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name}, inicio`}>
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="size-4" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight">{SITE.name}</span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#" className={cn(buttonVariants({ variant: 'ghost' }), 'hidden h-9 px-3 sm:inline-flex')}>
            Iniciar sesión
          </a>
          <a href="#empezar" className={cn(buttonVariants(), 'h-9 px-4')}>
            Buscar tutor
          </a>
        </div>
      </div>
    </header>
  )
}

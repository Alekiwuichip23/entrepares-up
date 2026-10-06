import { BookOpen } from 'lucide-react'

type SiteHeaderProps = {
  onEnter: () => void
}

const navigation = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#modalidades', label: 'Modalidades' },
]

export default function SiteHeader({ onEnter }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="flex items-center gap-2" aria-label="EntrePares UP, inicio">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="size-4" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight">EntrePares UP</span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onEnter}
            className="hidden h-9 rounded-lg px-3 text-sm font-medium transition-colors hover:bg-muted sm:inline-flex"
          >
            Soy de UPChiapas
          </button>
          <button
            type="button"
            onClick={onEnter}
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Buscar tutor
          </button>
        </div>
      </div>
    </header>
  )
}

import { SITE } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-heading font-bold text-foreground">{SITE.name}</span> · {SITE.tagline}
        </p>
        <ul className="flex gap-6">
          <li>
            <a href="#" className="hover:text-foreground">Términos</a>
          </li>
          <li>
            <a href="#" className="hover:text-foreground">Privacidad</a>
          </li>
          <li>
            <a href="#" className="hover:text-foreground">Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

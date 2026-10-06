export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-heading font-bold text-foreground">EntrePares UP</span> ·
          Tutorías entre compas de la Universidad Politécnica de Chiapas
        </p>
        <ul className="flex gap-6">
          <li>
            <a href="#inicio" className="hover:text-foreground">
              Volver arriba
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

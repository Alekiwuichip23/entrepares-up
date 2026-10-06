import {
  CalendarDays,
  Compass,
  GraduationCap,
  LayoutDashboard,
} from 'lucide-react'

const primaryLinks = [
  { label: 'Inicio', href: '#inicio', icon: LayoutDashboard, active: true },
  { label: 'Explorar tutores', href: '#tutores', icon: Compass },
  { label: 'Mis tutorías', href: '#mis-tutorias', icon: CalendarDays, badge: '2' },
]

type SidebarProps = {
  onNotice: (message: string) => void
}

export default function Sidebar({ onNotice }: SidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-[252px] flex-col border-r border-slate-200/80 bg-white px-5 py-7 lg:flex">
      <a href="#inicio" className="mb-10 flex items-center gap-3 px-2">
        <span className="flex size-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <GraduationCap size={23} strokeWidth={2.2} />
        </span>
        <span className="text-[19px] font-extrabold tracking-tight text-slate-900">
          Entre<span className="text-blue-600">Pares UP</span>
        </span>
      </a>

      <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.17em] text-slate-400">
        Tu espacio UPChiapas
      </p>
      <nav className="space-y-1">
        {primaryLinks.map(({ label, href, icon: Icon, active, badge }) => (
          <a
            key={label}
            href={href}
            className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-semibold transition ${
              active
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
            <span className="flex-1">{label}</span>
            {badge && (
              <span className="rounded-md bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-700">
                {badge}
              </span>
            )}
          </a>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="mb-5 rounded-2xl bg-blue-50 p-4">
          <div className="mb-2 flex size-8 items-center justify-center rounded-xl bg-white text-blue-600">
            <GraduationCap size={18} />
          </div>
          <p className="text-xs font-bold text-slate-800">¿También quieres enseñar?</p>
          <p className="mt-1 text-[11px] leading-5 text-slate-500">
            Comparte tus tips, ayuda a otro compa y gana dinero extra.
          </p>
          <button
            type="button"
            className="mt-3 text-[11px] font-bold text-blue-700 hover:text-blue-900"
            onClick={() => onNotice('Pronto podrás publicar tu perfil como tutor de UPChiapas.')}
          >
            Quiero dar asesorías →
          </button>
        </div>
      </div>
    </aside>
  )
}

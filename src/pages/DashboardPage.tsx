import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  GraduationCap,
  Search,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import BookingDialog from '../components/BookingDialog'
import Sidebar from '../components/Sidebar'
import TutorCard from '../components/TutorCard'
import { tutorCategories, tutors, type Tutor } from '../data/tutors'

const upcomingSessions = [
  {
    subject: 'Cálculo Diferencial',
    tutor: 'con Mariana López',
    date: 'Hoy, 4:00 p. m.',
    color: 'bg-violet-100 text-violet-700',
    initials: 'ML',
  },
  {
    subject: 'Programación Orientada a Objetos',
    tutor: 'con Andrés Cruz',
    date: 'Mañana, 11:30 a. m.',
    color: 'bg-emerald-100 text-emerald-700',
    initials: 'AC',
  },
]

type DashboardPageProps = {
  initialSearch?: string
  onBack: () => void
}

export default function DashboardPage({
  initialSearch = '',
  onBack,
}: DashboardPageProps) {
  const formattedToday = new Intl.DateTimeFormat('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date())
  const dateLabel =
    formattedToday.charAt(0).toLocaleUpperCase('es-MX') + formattedToday.slice(1)
  const [search, setSearch] = useState(initialSearch)
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [favorites, setFavorites] = useState<string[]>([])
  const [bookingTutor, setBookingTutor] = useState<Tutor | null>(null)
  const [notice, setNotice] = useState('')

  const filteredTutors = useMemo(() => {
    const query = search.trim().toLocaleLowerCase('es')
    return tutors.filter((tutor) => {
      const matchesCategory =
        activeCategory === 'Todas' || tutor.category === activeCategory
      const matchesSearch =
        !query ||
        `${tutor.name} ${tutor.subject} ${tutor.category} ${tutor.university}`
          .toLocaleLowerCase('es')
          .includes(query)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  function toggleFavorite(tutorId: string) {
    setFavorites((current) =>
      current.includes(tutorId)
        ? current.filter((favorite) => favorite !== tutorId)
        : [...current, tutorId],
    )
  }

  function confirmBooking(date: string, time: string) {
    if (!bookingTutor) return
    const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
    })
    setNotice(
      `Vista previa (sin reservar): ${bookingTutor.name}, ${formattedDate} a las ${time}. En una versión conectada, al confirmar recibirás los datos de transferencia para apartar.`,
    )
    setBookingTutor(null)
    window.setTimeout(() => setNotice(''), 5000)
  }

  return (
    <div id="inicio" className="min-h-screen bg-[#f7f8fc]">
      <Sidebar onNotice={setNotice} />
      <div className="min-h-screen lg:pl-[252px]">
        <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/90 px-4 py-3 backdrop-blur-xl sm:px-7 lg:px-10">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">
            <button type="button" onClick={onBack} className="flex items-center gap-2.5 lg:hidden">
              <span className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                <GraduationCap size={21} />
              </span>
              <span className="font-extrabold tracking-tight text-slate-900">
                Entre<span className="text-blue-600">Pares UP</span>
              </span>
            </button>
            <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
              <button type="button" onClick={onBack} className="hover:text-blue-600">
                Volver al inicio
              </button>
              <span>/</span>
              <span className="font-semibold text-slate-700">Inicio</span>
            </div>
            <div className="ml-auto flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                aria-label="Notificaciones"
                onClick={() => setNotice('No tienes notificaciones nuevas.')}
                className="relative flex size-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
              >
                <Bell size={19} />
                <span className="absolute right-2 top-2 size-2 rounded-full border-2 border-white bg-rose-500" />
              </button>
              <button
                type="button"
                onClick={() => setNotice('Perfil de estudiante en preparación.')}
                className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition hover:bg-slate-50"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-blue-100 text-xs font-extrabold text-blue-700">
                  AH
                </span>
                <span className="hidden text-left sm:block">
                  <span className="block text-xs font-bold text-slate-800">Ana Hernández</span>
                  <span className="block text-[10px] text-slate-400">ITIID · UPChiapas</span>
                </span>
                <ChevronDown size={14} className="hidden text-slate-400 sm:block" />
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-9">
          <section className="mb-7 flex flex-col justify-between gap-5 sm:mb-8 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <Sparkles size={14} />
                {dateLabel}
              </p>
              <h1 className="text-[26px] font-extrabold tracking-tight text-slate-900 sm:text-[32px]">
                ¡Qué onda, Ana! <span aria-hidden="true">👋</span>
              </h1>
              <p className="mt-1.5 text-sm text-slate-500">
                ¿Qué materia sacamos adelante hoy?
              </p>
            </div>
            <button
              type="button"
              onClick={() => document.getElementById('tutores')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-700"
            >
              <Search size={15} />
              Encontrar un compa tutor
            </button>
          </section>

          <section className="relative mb-8 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#255ce5] via-[#376fe8] to-[#5485f0] px-5 py-6 text-white shadow-xl shadow-blue-900/10 sm:px-8 sm:py-8">
            <div className="pointer-events-none absolute -right-10 -top-24 size-72 rounded-full border-[40px] border-white/[0.07]" />
            <div className="pointer-events-none absolute -bottom-24 right-[28%] size-48 rounded-full bg-white/[0.06]" />
            <div className="relative max-w-[610px]">
              <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-50">
                <Sparkles size={12} /> Entre compas se entiende mejor
              </p>
              <h2 className="max-w-lg text-[22px] font-extrabold leading-tight tracking-tight sm:text-[28px]">
                Pasa tus parciales sin colapsar: estudia con quien ya pasó por ahí.
              </h2>
              <p className="mt-2 max-w-md text-xs leading-5 text-blue-100 sm:text-sm">
                Tutorías de estudiantes de UPChiapas, para estudiantes de UPChiapas.
              </p>
              <form
                className="mt-5 flex max-w-[500px] items-center rounded-2xl bg-white p-1.5 shadow-lg shadow-blue-900/10"
                onSubmit={(event) => {
                  event.preventDefault()
                  document.getElementById('tutores')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Search size={18} className="ml-3 shrink-0 text-slate-400" />
                <input
                  aria-label="Buscar materia, tutor o universidad"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Busca Cálculo, POO, Física 1, Inglés..."
                  className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-xs text-slate-800 outline-none placeholder:text-slate-400 sm:text-sm"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
                >
                  Buscar
                </button>
              </form>
            </div>
            <div className="absolute bottom-7 right-8 hidden size-32 items-center justify-center rounded-[32px] border border-white/20 bg-white/10 backdrop-blur sm:flex">
              <GraduationCap size={68} strokeWidth={1.2} className="text-white/90" />
              <span className="absolute -right-3 -top-3 flex size-10 items-center justify-center rounded-2xl bg-amber-300 text-amber-900 shadow-lg">
                <Sparkles size={18} />
              </span>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-7 xl:grid-cols-[minmax(0,1fr)_310px]">
            <section id="tutores" className="min-w-0 scroll-mt-24">
              <div className="mb-4 flex items-end justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-extrabold tracking-tight text-slate-900">
                      Tutores para ti
                    </h2>
                    <span className="rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold text-blue-700">
                      {filteredTutors.length}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Alumnos destacados listos para ayudarte
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('Todas')
                    setSearch('')
                  }}
                  className="hidden items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 sm:flex"
                >
                  Ver todos <ArrowRight size={14} />
                </button>
              </div>

              <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
                {tutorCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                    className={`shrink-0 rounded-full px-3.5 py-2 text-[11px] font-semibold transition ${
                      activeCategory === category
                        ? 'bg-slate-900 text-white'
                        : 'border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-800'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {filteredTutors.length > 0 ? (
                <div className="grid gap-3.5 sm:grid-cols-2 2xl:grid-cols-3">
                  {filteredTutors.map((tutor) => (
                    <TutorCard
                      key={tutor.id}
                      tutor={tutor}
                      isFavorite={favorites.includes(tutor.id)}
                      onFavorite={toggleFavorite}
                      onBook={setBookingTutor}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
                  <Search size={24} className="mx-auto text-slate-300" />
                  <p className="mt-3 text-sm font-bold text-slate-700">
                    No encontramos compas para esa materia
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Prueba otra materia de UPChiapas o cambia los filtros.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch('')
                      setActiveCategory('Todas')
                    }}
                    className="mt-4 text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    Limpiar búsqueda
                  </button>
                </div>
              )}
            </section>

            <aside className="space-y-5">
              <section id="mis-tutorias" className="rounded-2xl border border-slate-200/80 bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-extrabold text-slate-900">Tus próximas asesorías</h2>
                    <p className="mt-1 text-[10px] text-slate-400">Vas con todo, compa</p>
                  </div>
                  <button
                    type="button"
                    aria-label="Ver calendario"
                    onClick={() => setNotice('La vista previa de tu calendario estará disponible pronto.')}
                    className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                  >
                    <CalendarDays size={16} />
                  </button>
                </div>
                <div className="space-y-3">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.subject}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
                    >
                      <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-[11px] font-extrabold ${session.color}`}>
                        {session.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-bold text-slate-800">{session.subject}</p>
                        <p className="mt-0.5 text-[10px] text-slate-400">{session.tutor}</p>
                        <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-blue-600">
                          <Clock3 size={11} /> {session.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setNotice('El calendario completo estará disponible en una próxima versión.')}
                  className="mt-4 flex w-full items-center justify-center gap-1 border-t border-slate-100 pt-3 text-[11px] font-bold text-blue-600 hover:text-blue-800"
                >
                  Ver todas mis asesorías <ArrowRight size={13} />
                </button>
              </section>

              <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 px-5 pb-5 pt-5">
                  <div className="mb-3 flex size-9 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm">
                    <BookOpen size={18} />
                  </div>
                  <p className="text-sm font-extrabold text-slate-900">Tu semana en UPChiapas</p>
                  <p className="mt-1 text-[11px] leading-5 text-slate-500">
                    Cada asesoría suma. ¡Tú puedes con ese parcial!
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex-1">
                      <div className="mb-1.5 flex justify-between text-[10px] font-semibold">
                        <span className="text-slate-600">Progreso semanal</span>
                        <span className="text-amber-700">2 de 3 horas de asesoría</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white">
                        <div className="h-full w-2/3 rounded-full bg-amber-400" />
                      </div>
                    </div>
                    <span className="flex size-9 items-center justify-center rounded-full border-2 border-amber-300 text-[10px] font-extrabold text-amber-700">
                      67%
                    </span>
                  </div>
                </div>
              </section>

              <section className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <UsersRound size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-800">¿Ya pasaste la materia?</p>
                  <p className="mt-0.5 text-[10px] text-slate-500">Gana extra ayudando a un compa</p>
                </div>
                <button
                  type="button"
                  aria-label="Más información sobre enseñar"
                  onClick={() => setNotice('Pronto podrás publicar tu perfil y compartir lo que sabes.')}
                  className="flex size-8 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-50 hover:text-blue-600"
                >
                  <ArrowRight size={16} />
                </button>
              </section>
            </aside>
          </div>

          <footer className="mt-10 flex flex-col gap-2 border-t border-slate-200/80 py-5 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 EntrePares UP · Comunidad UPChiapas</span>
            <span className="flex items-center gap-1">
              Hecho para aprender juntos <Check size={12} className="text-emerald-500" />
            </span>
          </footer>
        </main>
      </div>

      {notice && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-2xl"
        >
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
            <Check size={15} />
          </span>
          <span className="flex-1">{notice}</span>
          <button
            type="button"
            onClick={() => setNotice('')}
            aria-label="Cerrar aviso"
            className="text-slate-400 hover:text-white"
          >
            ×
          </button>
        </div>
      )}

      {bookingTutor && (
        <BookingDialog
          tutor={bookingTutor}
          onClose={() => setBookingTutor(null)}
          onConfirm={confirmBooking}
        />
      )}
    </div>
  )
}

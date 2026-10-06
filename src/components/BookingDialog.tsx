import { useState, type FormEvent } from 'react'
import { CalendarDays, Clock3, MapPin, UsersRound, X } from 'lucide-react'
import type { Tutor } from '../data/tutors'

type BookingDialogProps = {
  tutor: Tutor
  onClose: () => void
  onConfirm: (date: string, time: string) => void
}

export default function BookingDialog({
  tutor,
  onClose,
  onConfirm,
}: BookingDialogProps) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('16:00')
  const [modality, setModality] = useState('individual')
  const [location, setLocation] = useState('Biblioteca UPChiapas')
  const [groupSize, setGroupSize] = useState('2')
  const [showPreview, setShowPreview] = useState(false)
  const pricePerPerson = modality === 'individual' ? 100 : 70
  const totalPrice =
    modality === 'individual' ? pricePerPerson : pricePerPerson * Number(groupSize)
  const formattedDate = date
    ? new Date(`${date}T12:00:00`).toLocaleDateString('es-MX', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''
  const today = new Date()
  const minDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60_000,
  )
    .toISOString()
    .slice(0, 10)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (showPreview) {
      onConfirm(date, time)
      return
    }
    setShowPreview(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/40 p-0 backdrop-blur-[2px] sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-7"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-blue-600">Solicitar tutoría</p>
            <h2 id="booking-title" className="mt-1 text-xl font-extrabold text-slate-900">
              Agenda con {tutor.name.split(' ')[0]}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {tutor.subject} · tutoría entre compas de UPChiapas
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!showPreview ? (
            <>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <UsersRound size={15} className="text-blue-600" />
                  ¿Cómo quieren estudiar?
                </span>
                <select
                  value={modality}
                  onChange={(event) => setModality(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="individual">Individual · $100 MXN / hora</option>
                  <option value="grupal">Grupal · $70 MXN por persona / hora</option>
                </select>
              </label>
              {modality === 'grupal' && (
                <label className="block">
                  <span className="mb-2 block text-xs font-bold text-slate-700">
                    Alumnos en el grupo (2 a 5)
                  </span>
                  <select
                    value={groupSize}
                    onChange={(event) => setGroupSize(event.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="2">2 alumnos</option>
                    <option value="3">3 alumnos</option>
                    <option value="4">4 alumnos</option>
                    <option value="5">5 alumnos</option>
                  </select>
                </label>
              )}
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <MapPin size={15} className="text-blue-600" />
                  ¿Dónde nos vemos?
                </span>
                <select
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="Biblioteca UPChiapas">Biblioteca UPChiapas</option>
                  <option value="Cafetería">Cafetería</option>
                  <option value="Aulas vacías del campus">Aulas vacías del campus</option>
                  <option value="Google Meet (Virtual)">Google Meet (Virtual)</option>
                </select>
              </label>
              <p className="text-xs font-semibold text-slate-700">
                Total: ${totalPrice} MXN
                {modality === 'grupal' ? ` · ${groupSize} personas, $70 por persona` : ' · 1 hora'}
              </p>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CalendarDays size={15} className="text-blue-600" />
                  Fecha
                </span>
                <input
                  type="date"
                  required
                  min={minDate}
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Clock3 size={15} className="text-blue-600" />
                  Hora de inicio
                </span>
                <select
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="10:00">10:00</option>
                  <option value="12:00">12:00</option>
                  <option value="14:00">14:00</option>
                  <option value="16:00">16:00</option>
                  <option value="18:00">18:00</option>
                </select>
              </label>
            </>
          ) : (
            <div className="space-y-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-700">
              <p className="font-bold text-slate-900">Échale un ojo a tu apartado</p>
              <p>{tutor.subject} · {tutor.name}</p>
              <p>
                {modality === 'individual'
                  ? 'Individual · $100 MXN / hora'
                  : `Grupal · ${groupSize} alumnos · $70 MXN por persona / hora`}
              </p>
              <p>{location}</p>
              <p>{formattedDate} · {time}</p>
              <p className="font-bold">Total: ${totalPrice} MXN</p>
              <p className="text-xs leading-5 text-slate-500">
                Al confirmar el apartado, te enviaremos los datos para hacer la transferencia.
                Esta vista previa no realiza cobros ni reserva el horario todavía.
              </p>
              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="text-xs font-bold text-blue-600 hover:text-blue-800"
              >
                Cambiar datos
              </button>
            </div>
          )}
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            {showPreview ? 'Confirmar vista previa' : 'Revisar apartado'}
          </button>
          {!showPreview && (
            <p className="text-center text-[11px] leading-5 text-slate-400">
              Aún no se hace ningún cobro. Revisarás los datos antes de confirmar.
            </p>
          )}
        </form>
      </section>
    </div>
  )
}

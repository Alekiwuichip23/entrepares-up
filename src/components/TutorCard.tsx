import { ArrowUpRight, Heart, MapPin, Star } from 'lucide-react'
import type { Tutor } from '../data/tutors'

type TutorCardProps = {
  tutor: Tutor
  isFavorite: boolean
  onFavorite: (tutorId: string) => void
  onBook: (tutor: Tutor) => void
}

export default function TutorCard({
  tutor,
  isFavorite,
  onFavorite,
  onBook,
}: TutorCardProps) {
  return (
    <article className="group min-w-0 rounded-2xl border border-slate-200/80 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 sm:p-5">
      <div className="flex items-start gap-3">
        <img
          src={tutor.image}
          alt={`Foto de ${tutor.name}`}
          className="size-[54px] shrink-0 rounded-2xl object-cover"
          loading="lazy"
        />
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-slate-900">{tutor.name}</h3>
              <p className="mt-0.5 truncate text-[11px] text-slate-500">
                {tutor.degree.split(' · ')[0]}
              </p>
            </div>
            <button
              type="button"
              aria-label={isFavorite ? `Quitar a ${tutor.name} de guardados` : `Guardar a ${tutor.name}`}
              aria-pressed={isFavorite}
              onClick={() => onFavorite(tutor.id)}
              className={`flex size-8 shrink-0 items-center justify-center rounded-full transition ${
                isFavorite
                  ? 'bg-rose-50 text-rose-500'
                  : 'text-slate-400 hover:bg-rose-50 hover:text-rose-500'
              }`}
            >
              <Heart size={17} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
          <div className="mt-2 flex items-center gap-1 text-[11px]">
            <Star size={13} className="fill-amber-400 text-amber-400" />
            <span className="font-bold text-slate-800">{tutor.rating.toFixed(1)}</span>
            <span className="text-slate-400">({tutor.reviews} reseñas)</span>
          </div>
        </div>
      </div>

      <div className="my-4 h-px bg-slate-100" />
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-[11px] font-semibold text-blue-700">
          {tutor.subject}
        </span>
        {tutor.featured && (
          <span className="rounded-lg bg-amber-50 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-amber-700">
            Recomendado
          </span>
        )}
      </div>
      <div className="mt-3 flex items-center gap-1 text-[10px] text-slate-500">
        <MapPin size={12} />
        <span className="truncate">{tutor.university} · {tutor.category}</span>
      </div>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] text-slate-400">Individual · 1 hora</p>
          <p className="mt-0.5 text-base font-extrabold text-slate-900">
            ${tutor.price} MXN
            <span className="ml-1 text-[10px] font-medium text-slate-400">/ hora</span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => onBook(tutor)}
          className="inline-flex items-center gap-1 rounded-xl bg-blue-600 px-3 py-2.5 text-[11px] font-bold text-white transition hover:bg-blue-700 focus-visible:outline-blue-500"
        >
          Ver horarios <ArrowUpRight size={14} />
        </button>
      </div>
      <p className="mt-3 text-[10px] font-medium text-emerald-700">
        <span className="mr-1 inline-block size-1.5 rounded-full bg-emerald-500 align-middle" />
        {tutor.availability}
      </p>
      <p className="mt-2 text-[10px] font-medium text-slate-500">
        Grupal: $70 MXN por persona / hora
      </p>
      <p className="mt-2 text-[11px] leading-4 text-slate-600">
        {tutor.degree.split(' · ')[1]}
      </p>
    </article>
  )
}

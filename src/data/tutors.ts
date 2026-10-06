export type Tutor = {
  id: string
  name: string
  degree: string
  subject: string
  category: string
  rating: number
  reviews: number
  price: number
  university: string
  availability: string
  initials: string
  color: string
  image: string
  featured?: boolean
}

export const tutorCategories = [
  'Todas',
  'Cálculo Diferencial',
  'Cálculo Integral',
  'Cálculo de Varias Variables',
  'Programación Orientada a Objetos (POO)',
  'Física 1',
  'Inglés',
]

export const tutors: Tutor[] = [
  {
    id: 'mariana',
    name: 'Mariana López',
    degree:
      'ITIID · Aprobé Cálculo Diferencial con 96; te explico los límites sin hacerte bolas.',
    subject: 'Cálculo Diferencial',
    category: 'Cálculo Diferencial',
    rating: 4.9,
    reviews: 28,
    price: 100,
    university: 'UPChiapas',
    availability: 'Disponible hoy',
    initials: 'ML',
    color: 'bg-violet-100 text-violet-700',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
    featured: true,
  },
  {
    id: 'diego',
    name: 'Diego Hernández',
    degree:
      'ITIID · Cálculo Integral dejó de asustarme cuando entendí las integrales con ejemplos.',
    subject: 'Cálculo Integral',
    category: 'Cálculo Integral',
    rating: 5.0,
    reviews: 19,
    price: 100,
    university: 'UPChiapas',
    availability: 'Disponible mañana',
    initials: 'DH',
    color: 'bg-amber-100 text-amber-700',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80',
  },
  {
    id: 'paola',
    name: 'Paola Méndez',
    degree:
      'ITIID · Pasé Varias Variables con 95; vemos los ejercicios paso a paso, entre compas.',
    subject: 'Cálculo de Varias Variables',
    category: 'Cálculo de Varias Variables',
    rating: 4.9,
    reviews: 24,
    price: 100,
    university: 'UPChiapas',
    availability: '3 horarios esta semana',
    initials: 'PM',
    color: 'bg-rose-100 text-rose-700',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&h=160&q=80',
  },
  {
    id: 'andres',
    name: 'Andrés Cruz',
    degree:
      'ITIID · Te ayudo con POO desde las clases y objetos hasta tu proyecto final.',
    subject: 'Programación Orientada a Objetos (POO)',
    category: 'Programación Orientada a Objetos (POO)',
    rating: 4.8,
    reviews: 35,
    price: 100,
    university: 'UPChiapas',
    availability: 'Disponible hoy',
    initials: 'AC',
    color: 'bg-sky-100 text-sky-700',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80',
  },
  {
    id: 'fernanda',
    name: 'Fernanda Ruiz',
    degree:
      'Ingeniería Petrolera · Física 1 se entiende mejor practicando; repasamos sin presión.',
    subject: 'Física 1',
    category: 'Física 1',
    rating: 4.9,
    reviews: 17,
    price: 100,
    university: 'UPChiapas',
    availability: 'Disponible mañana',
    initials: 'FR',
    color: 'bg-emerald-100 text-emerald-700',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80',
    featured: true,
  },
  {
    id: 'jorge',
    name: 'Jorge Vázquez',
    degree:
      'ITIID · Practicamos inglés para tus clases, exposiciones y conversaciones del día a día.',
    subject: 'Inglés',
    category: 'Inglés',
    rating: 4.8,
    reviews: 12,
    price: 100,
    university: 'UPChiapas',
    availability: 'Disponible hoy',
    initials: 'JV',
    color: 'bg-indigo-100 text-indigo-700',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80',
  },
  {
    id: 'karla',
    name: 'Karla Sánchez',
    degree:
      'LAGE · Te comparto tips para Cálculo Diferencial y estudiamos a tu ritmo, cero juicios.',
    subject: 'Cálculo Diferencial',
    category: 'Cálculo Diferencial',
    rating: 4.9,
    reviews: 22,
    price: 100,
    university: 'UPChiapas',
    availability: '2 horarios esta semana',
    initials: 'KS',
    color: 'bg-pink-100 text-pink-700',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=80',
  },
  {
    id: 'ricardo',
    name: 'Ricardo Gómez',
    degree:
      'Ingeniería Petrolera · Te explico Cálculo Integral con ejercicios parecidos a los parciales.',
    subject: 'Cálculo Integral',
    category: 'Cálculo Integral',
    rating: 5.0,
    reviews: 16,
    price: 100,
    university: 'UPChiapas',
    availability: 'Disponible esta semana',
    initials: 'RG',
    color: 'bg-orange-100 text-orange-700',
    image:
      'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=160&h=160&q=80',
  },
]

import { Laptop, Library } from 'lucide-react'

const modalities = [
  {
    icon: Library,
    name: 'Individual: a tu ritmo',
    description:
      'Una hora completa para resolver tus dudas con calma y enfocarse en lo que más se te complica. $100 MXN por hora.',
    details: ['Biblioteca UPChiapas', 'Cafetería o Google Meet'],
  },
  {
    icon: Laptop,
    name: 'Grupal: estudien entre amigos',
    description:
      'Invita de 1 a 4 compas (grupos de 2 a 5 alumnos) y aprendan juntos. Cada quien paga $70 MXN por hora: estudian en bola y ahorran.',
    details: ['Aulas vacías del campus', 'Biblioteca o Google Meet'],
  },
]

export default function Modalities() {
  return (
    <section
      id="modalidades"
      className="mx-auto flex max-w-6xl scroll-mt-20 flex-col gap-10 px-5 py-20 md:py-24"
    >
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Modalidades</p>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Tú eliges: a solas o con tu bola, en campus o en Meet.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {modalities.map((modality) => (
          <article
            key={modality.name}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7"
          >
            <modality.icon className="size-6 text-primary" aria-hidden="true" />
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-2xl font-bold">{modality.name}</h3>
              <p className="leading-relaxed text-muted-foreground">{modality.description}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {modality.details.map((detail) => (
                <li
                  key={detail}
                  className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

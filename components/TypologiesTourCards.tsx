import { Category } from '@/types/Category'
import Image from 'next/image'
import Link from 'next/link'

const TypologiesTourCards = ({ typologies }: { typologies: Category[] }) => {
  return (
    <section className="w-full px-4 mt-15  py-10">
      <div className="
        grid gap-8
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-2
        max-w-335 mx-auto
      ">
        {typologies?.map((el) => (
          <Link
            href={``}
            key={el?.id}
            className="group relative rounded-2xl overflow-hidden block"
            style={{ aspectRatio: '655 / 419' }}
          >
            {/* Background Image */}
            <Image
              src={el?.icon}
              alt={el?.name}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent z-10" />

            {/* ALL PACKAGES badge */}
            <div className="absolute top-3 right-3 z-20">
              <span className="bg-emerald-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                All Packages
              </span>
            </div>

            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-5 pb-6">
              <h3 className="text-white font-bold text-xl leading-tight drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
                {el?.name}
              </h3>
              <p className="text-white/80 text-sm mt-1 leading-snug drop-shadow">
                {el?.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default TypologiesTourCards
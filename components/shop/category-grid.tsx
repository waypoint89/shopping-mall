import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/lib/shop-data'
import { SectionHeading } from './section-heading'

export function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <SectionHeading eyebrow="Shop by Category" title="카테고리" />
      <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {categories.map((cat) => (
          <li key={cat.title}>
            <Link href="#" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <Image
                  src={cat.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-serif text-xl md:text-2xl">{cat.title}</span>
                <span className="text-xs text-muted-foreground">{cat.subtitle}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

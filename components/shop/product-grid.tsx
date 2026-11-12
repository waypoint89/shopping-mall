import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { formatPrice, products } from '@/lib/shop-data'
import { AddToCartButton } from './add-to-cart-button'
import { SectionHeading } from './section-heading'

export function ProductGrid() {
  return (
    <section id="new" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading eyebrow="New Arrivals" title="이번 주 신상품" href="#" />
        <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-x-5">
          {products.map((product) => (
            <li key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-card">
                <Link href="#" aria-label={product.name}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                {product.badge && (
                  <span className="absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase">
                    {product.badge}
                  </span>
                )}
                <button
                  type="button"
                  aria-label={`${product.name} 위시리스트에 추가`}
                  className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background/90 transition-colors hover:text-accent"
                >
                  <Heart className="size-4" />
                </button>
                <AddToCartButton productId={product.id} />
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  {product.category}
                </p>
                <h3 className="text-sm">
                  <Link href="#" className="hover:text-accent">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm font-medium">{formatPrice(product.price)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

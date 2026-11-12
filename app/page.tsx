import { SiteHeader } from '@/components/shop/site-header'
import { Hero } from '@/components/shop/hero'
import { Benefits } from '@/components/shop/benefits'
import { CategoryGrid } from '@/components/shop/category-grid'
import { ProductGrid } from '@/components/shop/product-grid'
import { Editorial } from '@/components/shop/editorial'
import { Newsletter } from '@/components/shop/newsletter'
import { SiteFooter } from '@/components/shop/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Benefits />
        <CategoryGrid />
        <ProductGrid />
        <Editorial />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  )
}

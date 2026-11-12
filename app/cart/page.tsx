import type { Metadata } from 'next'
import { SiteHeader } from '@/components/shop/site-header'
import { SiteFooter } from '@/components/shop/site-footer'
import { CartView } from '@/components/shop/cart-view'

export const metadata: Metadata = {
  title: '장바구니 | MAISON ODETTE',
}

export default async function CartPage({
  searchParams,
}: {
  searchParams: Promise<{ added?: string }>
}) {
  const { added } = await searchParams

  return (
    <>
      <SiteHeader />
      <main>
        <CartView addedId={added} />
      </main>
      <SiteFooter />
    </>
  )
}

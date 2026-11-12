'use client'

import { useRouter } from 'next/navigation'
import { useCart } from '@/lib/cart-context'

export function AddToCartButton({ productId }: { productId: string }) {
  const router = useRouter()
  const { addItem } = useCart()

  return (
    <button
      type="button"
      onClick={() => {
        addItem(productId)
        router.push(`/cart?added=${productId}`)
      }}
      className="absolute inset-x-3 bottom-3 translate-y-2 bg-primary py-2.5 text-xs tracking-wide text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
    >
      장바구니 담기
    </button>
  )
}

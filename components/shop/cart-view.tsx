'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check, Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/shop-data'
import { cn } from '@/lib/utils'

const FREE_SHIPPING_THRESHOLD = 50000
const SHIPPING_FEE = 3000

export function CartView({ addedId }: { addedId?: string }) {
  const { lines, subtotal, ready, updateQuantity, removeItem } = useCart()

  if (!ready) return <div className="min-h-[50vh]" />

  const added = lines.find((line) => line.id === addedId)
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <p className="text-xs tracking-[0.35em] text-accent uppercase">Shopping Bag</p>
      <h1 className="mt-3 font-serif text-3xl md:text-4xl">장바구니</h1>

      {added && (
        <div
          role="status"
          className="mt-8 flex items-center gap-3 border border-accent/40 bg-accent/10 px-4 py-3 text-sm"
        >
          <Check className="size-4 shrink-0 text-accent" />
          <span>
            <strong className="font-medium">{added.name}</strong>을(를) 장바구니에 담았어요.
          </span>
        </div>
      )}

      {lines.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-6 py-16 text-center">
          <p className="text-muted-foreground">장바구니가 비어 있어요.</p>
          <Link
            href="/#new"
            className="bg-primary px-8 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-accent"
          >
            쇼핑 계속하기
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px]">
          <ul className="divide-y divide-border border-y border-border">
            {lines.map((line) => (
              <li
                key={line.id}
                className={cn(
                  'flex gap-4 py-6 transition-colors md:gap-6',
                  line.id === addedId && 'bg-secondary/60 px-3 md:px-4',
                )}
              >
                <div className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden bg-card md:w-28">
                  <Image src={line.image} alt={line.name} fill sizes="112px" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                        {line.category}
                      </p>
                      <h2 className="text-sm md:text-base">{line.name}</h2>
                      <p className="text-sm text-muted-foreground">{formatPrice(line.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(line.id)}
                      aria-label={`${line.name} 삭제`}
                      className="-mr-1 p-1 text-muted-foreground hover:text-accent"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="flex items-center border border-border">
                      <button
                        type="button"
                        onClick={() => updateQuantity(line.id, line.quantity - 1)}
                        aria-label="수량 줄이기"
                        className="p-2 hover:text-accent"
                      >
                        <Minus className="size-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm" aria-live="polite">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(line.id, line.quantity + 1)}
                        aria-label="수량 늘리기"
                        className="p-2 hover:text-accent"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                    <p className="text-sm font-medium">{formatPrice(line.price * line.quantity)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit bg-secondary/60 p-6 md:p-8">
            <h2 className="font-serif text-xl">주문 요약</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">상품 금액</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">배송비</dt>
                <dd>{shipping === 0 ? '무료' : formatPrice(shipping)}</dd>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-accent">
                  {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} 더 담으면 무료배송
                </p>
              )}
              <div className="flex justify-between border-t border-border pt-4 text-base font-medium">
                <dt>총 결제 금액</dt>
                <dd>{formatPrice(subtotal + shipping)}</dd>
              </div>
            </dl>
            <button
              type="button"
              className="mt-8 h-12 w-full bg-primary text-sm tracking-wide text-primary-foreground transition-colors hover:bg-accent"
            >
              주문하기
            </button>
            <Link
              href="/#new"
              className="mt-3 block text-center text-sm text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
            >
              쇼핑 계속하기
            </Link>
          </aside>
        </div>
      )}
    </section>
  )
}

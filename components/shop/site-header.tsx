'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { navLinks } from '@/lib/shop-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const pathname = usePathname()

  // Next.js ignores a Link to the current URL, so on the home page we scroll up ourselves.
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false)
    if (pathname !== '/') return
    event.preventDefault()
    window.history.replaceState(null, '', '/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="bg-primary px-4 py-2 text-center text-xs tracking-wide text-primary-foreground">
        신규 회원 첫 구매 10% 할인 · 5만원 이상 무료배송
      </div>

      <div className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          <div className="flex flex-1 items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="-ml-2 p-2"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          <nav aria-label="주요 메뉴" className="hidden flex-1 lg:block">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] tracking-wide text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/"
            onClick={handleLogoClick}
            aria-label="홈으로 이동"
            className="flex flex-col items-center leading-none"
          >
            <span className="font-serif text-2xl tracking-[0.3em] md:text-3xl">
              ODETTE
            </span>
            <span className="mt-1 text-[9px] tracking-[0.5em] text-muted-foreground">
              MAISON
            </span>
          </Link>

          <div className="flex flex-1 items-center justify-end gap-1 md:gap-3">
            <button type="button" aria-label="검색" className="p-2 hover:text-accent">
              <Search className="size-[18px]" />
            </button>
            <button
              type="button"
              aria-label="마이페이지"
              className="hidden p-2 hover:text-accent md:block"
            >
              <User className="size-[18px]" />
            </button>
            <button
              type="button"
              aria-label="위시리스트"
              className="hidden p-2 hover:text-accent md:block"
            >
              <Heart className="size-[18px]" />
            </button>
            <Link
              href="/cart"
              aria-label={`장바구니, ${count}개 상품`}
              className="relative p-2 hover:text-accent"
            >
              <ShoppingBag className="size-[18px]" />
              <span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-accent text-[10px] text-accent-foreground">
                {count}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="모바일 메뉴"
          className="border-b border-border bg-background lg:hidden"
        >
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 font-serif text-lg last:border-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

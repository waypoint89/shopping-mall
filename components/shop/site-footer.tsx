import Link from 'next/link'

const columns = [
  { title: 'Shop', links: ['New In', 'Clothing', 'Bags', 'Jewelry', 'Living'] },
  { title: 'Help', links: ['주문/배송 조회', '교환 및 반품', '자주 묻는 질문', '1:1 문의'] },
  { title: 'About', links: ['브랜드 스토리', '매장 안내', 'Journal', '채용'] },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-5 md:px-8">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl tracking-[0.3em]">ODETTE</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {'일상에 조용한 우아함을 더하는 셀렉트숍. 좋은 소재와 오래가는 디자인을 고릅니다.'}
          </p>
          <p className="mt-6 text-sm">고객센터 1588-0000</p>
          <p className="text-xs text-muted-foreground">평일 10:00 - 17:00 (점심 12:00 - 13:00)</p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-xs tracking-[0.3em] text-muted-foreground uppercase">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm transition-colors hover:text-accent">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:justify-between md:px-8">
          <p>© 2026 MAISON ODETTE. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-foreground">이용약관</Link>
            <Link href="#" className="font-medium hover:text-foreground">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

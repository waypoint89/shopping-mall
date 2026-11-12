import { Gift, RotateCcw, Sparkles, Truck } from 'lucide-react'

const benefits = [
  { icon: Truck, title: '무료 배송', desc: '5만원 이상 구매 시' },
  { icon: RotateCcw, title: '간편 교환·반품', desc: '수령 후 14일 이내' },
  { icon: Gift, title: '선물 포장', desc: '모든 주문에 무료 제공' },
  { icon: Sparkles, title: '멤버십 혜택', desc: '구매 금액의 3% 적립' },
]

export function Benefits() {
  return (
    <section aria-label="쇼핑 혜택" className="border-y border-border">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 md:grid-cols-4 md:px-8">
        {benefits.map(({ icon: Icon, title, desc }) => (
          <li key={title} className="flex flex-col items-center gap-2 text-center">
            <Icon className="size-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <p className="mt-1 text-sm">{title}</p>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

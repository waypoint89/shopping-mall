import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[78vh] min-h-[520px] w-full">
        <Image
          src="/images/hero.png"
          alt="크림색 린넨 재킷을 입은 여성이 창가 햇살 아래 서 있는 모습"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
      </div>

      <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 md:px-8">
        <div className="max-w-lg">
          <p className="mb-5 text-xs tracking-[0.4em] text-accent">
            AUTUMN / WINTER 2026
          </p>
          <h1 className="text-balance font-serif text-5xl leading-[1.05] md:text-7xl">
            Quiet <em className="italic text-accent">Elegance</em>
          </h1>
          <p className="mt-6 max-w-sm text-pretty leading-relaxed text-foreground/75">
            {'오래 곁에 두고 싶은 것들. 담백한 실루엣과 좋은 소재로 완성한 이번 시즌 컬렉션을 만나보세요.'}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#new"
              className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-accent"
            >
              컬렉션 보기
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#journal"
              className="inline-flex items-center border border-foreground/40 px-7 py-3.5 text-sm tracking-wide transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              룩북
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

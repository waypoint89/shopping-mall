import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Editorial() {
  return (
    <section id="journal" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
          <Image
            src="/images/editorial.png"
            alt="카멜 울 코트를 입고 가을 햇살 속 거리를 걷는 여성"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="md:pr-8">
          <p className="text-xs tracking-[0.35em] text-accent uppercase">The Journal · No. 12</p>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-tight md:text-5xl">
            {'가을, 코트 한 벌로 완성하는 '}
            <em className="italic">우아함</em>
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-foreground/75">
            {'출근길부터 주말의 산책까지. 메종 오데뜨의 스타일리스트가 제안하는 카멜 코트 스타일링 가이드와 함께, 계절이 바뀌는 순간을 더 아름답게 맞이해 보세요.'}
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-border py-6 text-center">
            <div>
              <dt className="text-xs text-muted-foreground">소재</dt>
              <dd className="mt-1 font-serif text-xl">Wool 90%</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">핏</dt>
              <dd className="mt-1 font-serif text-xl">Relaxed</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">컬러</dt>
              <dd className="mt-1 font-serif text-xl">Camel</dd>
            </div>
          </dl>
          <Link
            href="#"
            className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm tracking-wide transition-colors hover:border-accent hover:text-accent"
          >
            스토리 읽기
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

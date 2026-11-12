import Link from 'next/link'

type Props = {
  eyebrow: string
  title: string
  href?: string
  linkLabel?: string
}

export function SectionHeading({ eyebrow, title, href, linkLabel = '전체 보기' }: Props) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-xs tracking-[0.35em] text-accent uppercase">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">{title}</h2>
      </div>
      {href && (
        <Link
          href={href}
          className="shrink-0 border-b border-foreground/40 pb-0.5 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  )
}

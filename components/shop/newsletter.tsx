export function Newsletter() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-2xl px-4 py-20 text-center md:py-24">
        <p className="text-xs tracking-[0.35em] text-primary-foreground/60 uppercase">Newsletter</p>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl">
          {'가장 먼저 만나는 새로운 소식'}
        </h2>
        <p className="mt-4 text-sm text-primary-foreground/70">
          {'신상품 소식과 회원 전용 혜택을 메일로 보내드려요.'}
        </p>
        <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            이메일 주소
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="이메일 주소를 입력하세요"
            className="h-12 flex-1 border border-primary-foreground/30 bg-transparent px-4 text-sm placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 bg-background px-8 text-sm tracking-wide text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            구독하기
          </button>
        </form>
      </div>
    </section>
  )
}

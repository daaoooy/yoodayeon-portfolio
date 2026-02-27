export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white px-6 dark:bg-zinc-950">
      <div className="bg-white dark:bg-zinc-950" aria-hidden="true" />

      <main className="flex max-w-sm flex-col items-center text-center">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-100 text-4xl shadow-sm dark:bg-zinc-900">
          <span>🚧</span>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Portfolio in Progress..
          </h1>

          <p className="px-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            안녕하세요! <br />
            취업을 준비하며 꾸준히 공부 중인 개발자{' '}
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
              {"'유다연'"}
            </span>{' '}
            입니다.
            <span className="mt-4 block">
              <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                저
              </span>
              를 가장 잘 보여줄 수 있는 공간을 만들기 위해,
            </span>
            <strong className="font-bold text-yellow-600 dark:text-yellow-400">
              한 땀 한 땀 직접
            </strong>{' '}
            포트폴리오를 구현하고 있습니다!
          </p>
        </div>

        <footer
          className="mt-16 text-xs text-zinc-400"
          suppressHydrationWarning
        >
          &copy; {new Date().getFullYear()} • 곧 완성될 예정입니다. Soon to be
          launched!
        </footer>
      </main>
    </div>
  );
}

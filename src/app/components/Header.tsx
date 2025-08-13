export function Header() {
  return (
    <header className="w-full px-6 py-4 md:px-10 md:py-6 flex items-center justify-between bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div>
        <h1 className="text-2xl md:text-3xl ml-6 font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
          Mi tienda
        </h1>
      </div>
    </header>
  )
}
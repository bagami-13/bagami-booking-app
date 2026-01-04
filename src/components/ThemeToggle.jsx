import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className=" gap-6fixed top-4 right-4 px-4 py-2 rounded-lg
                 bg-gray-200 dark:bg-gray-700
                 hover:scale-105 transition-all"
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}
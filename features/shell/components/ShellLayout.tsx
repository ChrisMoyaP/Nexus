"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

type Props = {
  sidebar: React.ReactNode
  children: React.ReactNode
}

export default function ShellLayout({ sidebar, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Cierra el drawer al cambiar de ruta
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      {/* Barra superior — solo visible en móvil */}
      <header className="md:hidden flex items-center h-14 px-4 bg-gray-900 text-white shrink-0">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
          className="p-1 rounded hover:bg-gray-700 transition"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="ml-3 font-bold text-lg">Nexus</span>
      </header>

      {/* Overlay backdrop — solo en móvil cuando el drawer está abierto */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Wrapper del sidebar: drawer en móvil, estático en desktop */}
      <div
        className={`fixed inset-y-0 left-0 z-30 transition-transform duration-300 md:static md:z-auto md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebar}
      </div>

      {/* Contenido principal */}
      <main className="flex-1 p-8 bg-gray-100 min-w-0 relative">
        {children}
      </main>
    </>
  )
}

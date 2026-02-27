"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import type { AppItem } from "../config/apps-config"

type Props = {
  apps: AppItem[]
}

export default function SidebarNav({ apps }: Props) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-2 mt-2">
      {apps.map((app) => (
        <NavItem key={app.path ?? app.name} app={app} pathname={pathname} />
      ))}
    </nav>
  )
}

function NavItem({ app, pathname }: { app: AppItem; pathname: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const isActive = app.path ? pathname === app.path : false
  const hasChildren = Array.isArray(app.children) && app.children.length > 0

  const baseClass = "px-4 py-2 rounded-lg transition w-full text-left"
  const activeClass = "bg-white text-black font-semibold"
  const inactiveClass = "hover:bg-gray-800"

  // Grupo colapsable — tiene hijos (con o sin path/externalUrl propios)
  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${baseClass} ${inactiveClass} flex justify-between items-center`}
        >
          <span>{app.name}</span>
          <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="ml-4 flex flex-col gap-1 mt-1">
            {app.children!.map((child) => (
              <NavItem key={child.path ?? child.name} app={child} pathname={pathname} />
            ))}
          </div>
        )}
      </div>
    )
  }

  // Ruta interna — externalUrl es solo metadata para la página, no destino de navegación
  return (
    <Link
      href={app.path!}
      className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
    >
      {app.name}
    </Link>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { apps } from "../config/apps-config"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 flex flex-col shadow-xl">
      <h2 className="text-2xl font-bold">Nexus</h2>

      <nav className="flex flex-col gap-2 mt-2">
        {apps.map((app) => {
          const isActive = pathname === app.path

          return (
            <Link
              key={app.path}
              href={app.path}
              className={`px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-white text-black font-semibold"
                  : "hover:bg-gray-800"
              }`}
            >
              {app.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

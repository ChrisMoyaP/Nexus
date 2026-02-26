import { getApps } from "../config/apps-config"
import SidebarNav from "./SidebarNav"

export default async function Sidebar() {
  const apps = await getApps()

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 flex flex-col shadow-xl">
      <h2 className="text-2xl font-bold">Nexus</h2>
      <SidebarNav apps={apps} />
    </aside>
  )
}

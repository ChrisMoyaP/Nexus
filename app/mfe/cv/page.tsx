import { getApps } from "@/features/shell/config/apps-config"

export default async function CVPage() {
  const apps = await getApps()
  const app = apps.find((a) => a.path === "/mfe/cv")

  if (!app?.externalUrl) return null

  return (
    <div className="absolute inset-0">
      <iframe
        src={app.externalUrl}
        className="w-full h-full border-0"
        title={app.name}
      />
    </div>
  )
}

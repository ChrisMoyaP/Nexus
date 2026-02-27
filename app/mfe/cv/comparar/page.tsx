import { getApps } from "@/features/shell/config/apps-config"

export default async function CVCompararPage() {
  const apps = await getApps()
  const cv = apps.find((a) => a.path === "/mfe/cv")
  const app = cv?.children?.find((c) => c.path === "/mfe/cv/comparar")

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

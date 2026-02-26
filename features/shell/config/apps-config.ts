import appsData from "./apps.json"

export type AppItem = {
  name: string
  path?: string
  externalUrl?: string
  description?: string
  children?: AppItem[]
}

export async function getApps(): Promise<AppItem[]> {
  // Future: replace this body with a fetch() or DB query.
  // The return type and call signature never change.
  return appsData as AppItem[]
}

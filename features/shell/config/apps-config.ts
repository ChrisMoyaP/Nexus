export type AppItem = {
  name: string
  path: string
  description?: string
}

export const apps: AppItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Apps",
    path: "/apps",
  },
  {
    name: "CV Inteligente",
    path: "/mfe/cv",
    description: "Aplicación de creación de CV inteligente",
  }
]

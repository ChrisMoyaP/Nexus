export default function Home() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">Nexus</h1>

      <p className="mb-4">
        Nexus es el shell principal que conecta múltiples microfrontends
        independientes desplegados como contenedores Docker.
      </p>

      <p className="mb-4">
        Cada aplicación se despliega de forma independiente, permitiendo
        escalabilidad y modularidad.
      </p>

      <p>
        Esta arquitectura permite evolucionar hacia ECS, Kubernetes o entornos
        distribuidos sin cambiar el código base.
      </p>
    </div>
  )
}

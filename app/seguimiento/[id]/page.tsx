import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MessageCircle, Phone } from "lucide-react"

export default function DetalleSeguimientoPage({ params }: { params: { id: string } }) {
  // En un entorno real, estos datos vendrían de una API
  const parte = {
    id: params.id,
    tipo: "Vitrocerámica",
    fecha: "15/04/2023",
    estado: "En proceso",
    direccion: "Calle Ejemplo 123, 28001 Madrid",
    descripcion:
      "Vitrocerámica rota por caída de objeto pesado. La superficie está agrietada y no funciona correctamente.",
    perito: "Ana García",
    telefonoPerito: "+34 600 123 456",
    historial: [
      {
        fecha: "15/04/2023 10:30",
        estado: "Parte creado",
        descripcion: "Se ha recibido el parte con 3 fotos adjuntas.",
      },
      {
        fecha: "16/04/2023 09:15",
        estado: "En revisión",
        descripcion: "El equipo técnico está revisando la información proporcionada.",
      },
      {
        fecha: "17/04/2023 14:45",
        estado: "Perito asignado",
        descripcion: "Se ha asignado un perito para evaluar el daño.",
      },
      {
        fecha: "18/04/2023 11:20",
        estado: "Visita programada",
        descripcion: "El perito visitará su domicilio el 20/04/2023 entre 10:00 y 12:00.",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Button asChild variant="outline" className="mb-4">
            <Link href="/seguimiento" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver a mis partes
            </Link>
          </Button>

          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Detalle del parte</h1>
            <Badge className="bg-yellow-100 text-yellow-800">{parte.estado}</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Información básica</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="text-gray-500">Referencia:</dt>
                  <dd className="font-medium">{parte.id}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Tipo de objeto:</dt>
                  <dd>{parte.tipo}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Fecha de creación:</dt>
                  <dd>{parte.fecha}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Dirección:</dt>
                  <dd>{parte.direccion}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Descripción</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{parte.descripcion}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Perito asignado</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="text-gray-500">Nombre:</dt>
                  <dd className="font-medium">{parte.perito}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Teléfono:</dt>
                  <dd>{parte.telefonoPerito}</dd>
                </div>
              </dl>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" /> Llamar
              </Button>
              <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4" /> Mensaje
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Historial del parte</CardTitle>
            <CardDescription>Seguimiento de todas las actualizaciones</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="relative border-l border-gray-200 ml-3">
              {parte.historial.map((evento, index) => (
                <li key={index} className="mb-6 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full -left-3 ring-8 ring-white">
                    <span className="text-xs font-medium text-emerald-800">{index + 1}</span>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                    {evento.estado}
                    {index === parte.historial.length - 1 && (
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                        Último
                      </span>
                    )}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{evento.fecha}</time>
                  <p className="mb-4 text-base font-normal text-gray-500">{evento.descripcion}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


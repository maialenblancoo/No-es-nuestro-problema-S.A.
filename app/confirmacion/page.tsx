import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, FileText } from "lucide-react"

export default function ConfirmacionPage() {
  // En un entorno real, obtendríamos estos datos de la base de datos
  const numeroReferencia =
    "INS" +
    Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0")
  const fechaCreacion = new Date().toLocaleDateString("es-ES")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-emerald-100 p-3">
            <CheckCircle className="h-12 w-12 text-emerald-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">¡Parte enviado con éxito!</h1>
        <p className="text-gray-600 mb-8">
          Hemos recibido tu reporte de incidente. Te mantendremos informado sobre el progreso.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Detalles del parte</CardTitle>
            <CardDescription>Guarda esta información para futuras referencias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-gray-500">Número de referencia:</span>
                <span className="font-medium">{numeroReferencia}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Fecha de creación:</span>
                <span>{fechaCreacion}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Estado actual:</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Pendiente de revisión
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button asChild variant="outline" className="w-full">
              <Link href="/seguimiento" className="flex items-center justify-center gap-2">
                <FileText className="h-4 w-4" /> Ver estado del parte
              </Link>
            </Button>
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Link href="/" className="flex items-center justify-center gap-2">
                <Home className="h-4 w-4" /> Volver al inicio
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Recibirás un correo electrónico con la confirmación y los detalles del parte. También puedes consultar el
            estado de tu parte en cualquier momento desde la sección "Mis partes".
          </p>
        </div>
      </div>
    </div>
  )
}


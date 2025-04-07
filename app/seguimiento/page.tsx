import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Eye, FileText, Plus } from "lucide-react"

export default function SeguimientoPage() {
  // En un entorno real, estos datos vendrían de una API
  const partes = [
    {
      id: "INS123456",
      tipo: "Vitrocerámica",
      fecha: "15/04/2023",
      estado: "Completado",
      colorEstado: "green",
      ultimaActualizacion: "Reembolso procesado (20/04/2023)",
    },
    {
      id: "INS789012",
      tipo: "Cristal",
      fecha: "02/05/2023",
      estado: "En proceso",
      colorEstado: "yellow",
      ultimaActualizacion: "Perito asignado (03/05/2023)",
    },
    {
      id: "INS345678",
      tipo: "Mampara",
      fecha: "10/06/2023",
      estado: "Pendiente",
      colorEstado: "gray",
      ultimaActualizacion: "Parte recibido (10/06/2023)",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Mis partes</h1>
        <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
          <Link href="/reportar" className="flex items-center gap-2">
            <Plus className="h-4 w-4" /> Nuevo parte
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="todos">
        <TabsList className="mb-6">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
          <TabsTrigger value="en-proceso">En proceso</TabsTrigger>
          <TabsTrigger value="completados">Completados</TabsTrigger>
        </TabsList>

        <TabsContent value="todos" className="space-y-6">
          {partes.map((parte) => (
            <Card key={parte.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{parte.tipo}</CardTitle>
                    <CardDescription>Referencia: {parte.id}</CardDescription>
                  </div>
                  <Badge
                    className={`
                      ${parte.colorEstado === "green" ? "bg-green-100 text-green-800" : ""}
                      ${parte.colorEstado === "yellow" ? "bg-yellow-100 text-yellow-800" : ""}
                      ${parte.colorEstado === "gray" ? "bg-gray-100 text-gray-800" : ""}
                    `}
                  >
                    {parte.estado}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Fecha de creación:</span>
                    <span>{parte.fecha}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Última actualización:</span>
                    <span>{parte.ultimaActualizacion}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/seguimiento/${parte.id}`} className="flex items-center justify-center gap-2">
                    <Eye className="h-4 w-4" /> Ver detalles
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pendientes" className="space-y-6">
          {partes
            .filter((parte) => parte.estado === "Pendiente")
            .map((parte) => (
              <Card key={parte.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{parte.tipo}</CardTitle>
                      <CardDescription>Referencia: {parte.id}</CardDescription>
                    </div>
                    <Badge className="bg-gray-100 text-gray-800">{parte.estado}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fecha de creación:</span>
                      <span>{parte.fecha}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Última actualización:</span>
                      <span>{parte.ultimaActualizacion}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/seguimiento/${parte.id}`} className="flex items-center justify-center gap-2">
                      <Eye className="h-4 w-4" /> Ver detalles
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="en-proceso" className="space-y-6">
          {partes
            .filter((parte) => parte.estado === "En proceso")
            .map((parte) => (
              <Card key={parte.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{parte.tipo}</CardTitle>
                      <CardDescription>Referencia: {parte.id}</CardDescription>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">{parte.estado}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fecha de creación:</span>
                      <span>{parte.fecha}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Última actualización:</span>
                      <span>{parte.ultimaActualizacion}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/seguimiento/${parte.id}`} className="flex items-center justify-center gap-2">
                      <Eye className="h-4 w-4" /> Ver detalles
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="completados" className="space-y-6">
          {partes
            .filter((parte) => parte.estado === "Completado")
            .map((parte) => (
              <Card key={parte.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{parte.tipo}</CardTitle>
                      <CardDescription>Referencia: {parte.id}</CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{parte.estado}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fecha de creación:</span>
                      <span>{parte.fecha}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Última actualización:</span>
                      <span>{parte.ultimaActualizacion}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/seguimiento/${parte.id}`} className="flex items-center justify-center gap-2">
                      <Eye className="h-4 w-4" /> Ver detalles
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-center">
        <p className="text-gray-500 mb-4">¿Necesitas reportar un nuevo incidente?</p>
        <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
          <Link href="/reportar" className="flex items-center gap-2">
            <FileText className="h-4 w-4" /> Crear nuevo parte
          </Link>
        </Button>
      </div>
    </div>
  )
}


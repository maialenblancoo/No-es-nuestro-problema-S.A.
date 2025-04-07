import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Clock, Camera } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl text-white mb-12">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reporta incidentes en tu hogar de forma rápida y sencilla
            </h1>
            <p className="text-lg mb-6">
              Con nuestra aplicación, puedes reportar daños en tu hogar en minutos y recibir actualizaciones en tiempo
              real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link href="/reportar">Reportar incidente</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white bg-white/20 text-white hover:bg-white hover:text-emerald-600"
              >
                <Link href="/seguimiento">Ver mis partes</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/hero-image.png"
              alt="Familia reportando un incidente con un técnico"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Camera className="h-12 w-12 text-emerald-500 mb-2" />
              <CardTitle>Captura el daño</CardTitle>
              <CardDescription>Toma fotos del objeto dañado desde diferentes ángulos</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Nuestro sistema de IA analizará las imágenes para identificar el tipo de daño y objeto afectado.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-12 w-12 text-emerald-500 mb-2" />
              <CardTitle>Completa el formulario</CardTitle>
              <CardDescription>Responde algunas preguntas sobre el incidente</CardDescription>
            </CardHeader>
            <CardContent>
              <p>El formulario se adapta según el tipo de objeto dañado para recopilar la información necesaria.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-12 w-12 text-emerald-500 mb-2" />
              <CardTitle>Seguimiento en tiempo real</CardTitle>
              <CardDescription>Recibe actualizaciones sobre el estado de tu parte</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Mantente informado sobre cada paso del proceso hasta la resolución del incidente.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-100 rounded-xl my-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para reportar un incidente?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Nuestro sistema te guiará paso a paso para reportar cualquier daño en tu hogar de manera rápida y eficiente.
          </p>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/reportar" className="flex items-center gap-2">
              Reportar ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-200 h-12 w-12 flex items-center justify-center">
                  <span className="font-bold text-gray-600">ML</span>
                </div>
                <div>
                  <CardTitle>María López</CardTitle>
                  <CardDescription>Cliente desde 2022</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                "El proceso fue muy sencillo. Reporté una rotura en mi vitrocerámica, subí las fotos y en menos de 24
                horas ya tenía un perito asignado. Muy satisfecha con el servicio."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-200 h-12 w-12 flex items-center justify-center">
                  <span className="font-bold text-gray-600">JR</span>
                </div>
                <div>
                  <CardTitle>Juan Rodríguez</CardTitle>
                  <CardDescription>Cliente desde 2021</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                "Tuve un incidente con una mampara de ducha. La aplicación me guió paso a paso, y el sistema de
                seguimiento me mantuvo informado en todo momento. Excelente servicio."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}


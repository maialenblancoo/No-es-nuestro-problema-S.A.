"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Upload, ArrowRight, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ReportarPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [tipoObjeto, setTipoObjeto] = useState("")
  const [fotos, setFotos] = useState<string[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // En un entorno real, aquí subiríamos las imágenes a un servidor
      // Para esta demo, simplemente simularemos que se han subido
      const newFotos = [...fotos]
      for (let i = 0; i < e.target.files.length; i++) {
        newFotos.push(URL.createObjectURL(e.target.files[i]))
      }
      setFotos(newFotos)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En un entorno real, aquí enviaríamos los datos al servidor
    router.push("/confirmacion")
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Reportar un incidente</h1>

      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm">Información básica</span>
            <span className="text-sm">Fotos</span>
            <span className="text-sm">Detalles</span>
            <span className="text-sm">Confirmación</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: `${(step / 4) * 100}%` }}></div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "Información básica"}
              {step === 2 && "Subir fotos del daño"}
              {step === 3 && "Detalles del incidente"}
              {step === 4 && "Revisar y confirmar"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Cuéntanos qué tipo de objeto se ha dañado"}
              {step === 2 && "Sube fotos claras del objeto dañado desde diferentes ángulos"}
              {step === 3 && "Proporciona más detalles sobre el incidente"}
              {step === 4 && "Revisa la información antes de enviar el parte"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="tipo-objeto">Tipo de objeto dañado</Label>
                    <Select value={tipoObjeto} onValueChange={setTipoObjeto}>
                      <SelectTrigger id="tipo-objeto">
                        <SelectValue placeholder="Selecciona el tipo de objeto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vitroceramica">Vitrocerámica</SelectItem>
                        <SelectItem value="cristal">Cristal/Ventana</SelectItem>
                        <SelectItem value="espejo">Espejo</SelectItem>
                        <SelectItem value="mampara">Mampara de ducha</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {tipoObjeto === "otro" && (
                    <div>
                      <Label htmlFor="otro-objeto">Especifica el objeto</Label>
                      <Input id="otro-objeto" placeholder="Describe el objeto dañado" />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="fecha-incidente">Fecha del incidente</Label>
                    <Input id="fecha-incidente" type="date" />
                  </div>

                  <div>
                    <Label>¿El objeto es reparable o necesita reemplazo?</Label>
                    <RadioGroup defaultValue="no-se">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="reparable" id="reparable" />
                        <Label htmlFor="reparable">Creo que es reparable</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="reemplazo" id="reemplazo" />
                        <Label htmlFor="reemplazo">Necesita reemplazo</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-se" id="no-se" />
                        <Label htmlFor="no-se">No estoy seguro</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Camera className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-4">
                      Arrastra y suelta las fotos aquí o haz clic para seleccionarlas
                    </p>
                    <Input
                      id="fotos"
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("fotos")?.click()}
                      className="flex items-center gap-2"
                    >
                      <Upload className="h-4 w-4" /> Seleccionar fotos
                    </Button>
                  </div>

                  {fotos.length > 0 && (
                    <div>
                      <Label>Fotos subidas ({fotos.length})</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {fotos.map((foto, index) => (
                          <div key={index} className="relative aspect-square">
                            {/* En un entorno real, aquí mostraríamos las miniaturas de las imágenes */}
                            <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                              <span className="text-xs text-gray-500">Foto {index + 1}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="text-sm text-gray-500">Consejos para tomar buenas fotos:</p>
                    <ul className="text-sm text-gray-500 list-disc pl-5 mt-1">
                      <li>Asegúrate de que haya buena iluminación</li>
                      <li>Toma fotos desde diferentes ángulos</li>
                      <li>Incluye una foto que muestre el daño completo</li>
                      <li>Incluye una foto de detalle del daño</li>
                    </ul>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="descripcion">Descripción del incidente</Label>
                    <Textarea
                      id="descripcion"
                      placeholder="Describe cómo ocurrió el incidente y cualquier detalle relevante"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="ubicacion">Ubicación en el hogar</Label>
                    <Select>
                      <SelectTrigger id="ubicacion">
                        <SelectValue placeholder="Selecciona la ubicación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cocina">Cocina</SelectItem>
                        <SelectItem value="bano">Baño</SelectItem>
                        <SelectItem value="salon">Salón</SelectItem>
                        <SelectItem value="dormitorio">Dormitorio</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="direccion">Dirección completa</Label>
                    <Textarea id="direccion" placeholder="Calle, número, piso, código postal, ciudad" rows={2} />
                  </div>

                  <div>
                    <Label htmlFor="contacto">Teléfono de contacto</Label>
                    <Input id="contacto" type="tel" placeholder="+34 600 000 000" />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Resumen del parte</h3>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Tipo de objeto:</dt>
                        <dd className="font-medium">{tipoObjeto || "No especificado"}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Fotos adjuntas:</dt>
                        <dd className="font-medium">{fotos.length}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Estado:</dt>
                        <dd className="font-medium">Pendiente de envío</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="border-t pt-4">
                    <Label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      Acepto los términos y condiciones del servicio
                    </Label>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Anterior
              </Button>
            ) : (
              <div></div>
            )}

            {step < 4 ? (
              <Button type="button" onClick={nextStep} className="flex items-center gap-2">
                Siguiente <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" onClick={handleSubmit} className="bg-emerald-600 hover:bg-emerald-700">
                Enviar parte
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}


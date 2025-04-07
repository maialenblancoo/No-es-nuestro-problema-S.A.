"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, User, FileText, LogOut, Bell } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // En un entorno real, verificaríamos si el usuario está autenticado
  const isLoggedIn = true

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <>
              <img src="/logo.svg" alt="No es nuestro problema S.A." className="h-8 w-auto mr-2" />
              <span className="text-xl font-bold text-blue-600">No es nuestro problema S.A.</span>
            </>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Inicio
            </Link>
            <Link href="/reportar" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Reportar incidente
            </Link>
            <Link href="/seguimiento" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Mis partes
            </Link>
            <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Ayuda
            </Link>
          </nav>

          {/* User Menu (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Usuario" />
                        <AvatarFallback>US</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Perfil</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Mis partes</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Cerrar sesión</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link href="/login">Iniciar sesión</Link>
                </Button>
                <Button asChild>
                  <Link href="/registro">Registrarse</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/reportar"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reportar incidente
              </Link>
              <Link
                href="/seguimiento"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Mis partes
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ayuda
              </Link>
            </nav>

            {isLoggedIn ? (
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Usuario" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Usuario</p>
                    <p className="text-sm text-gray-500">usuario@ejemplo.com</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button asChild variant="ghost" className="w-full justify-start">
                    <Link href="#" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Perfil</span>
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="w-full justify-start">
                    <Link href="/seguimiento" className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Mis partes</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Link href="#" className="flex items-center">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Cerrar sesión</span>
                    </Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="pt-4 border-t flex flex-col space-y-2">
                <Button asChild>
                  <Link href="/login">Iniciar sesión</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/registro">Registrarse</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}



import { NavigationUrl } from "@/presentation/components/auth/NavigationUrl"
import { RegisterForm } from "@/presentation/components/auth/RegisterForm"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "CashTracker - Crear Cuenta",
    description: "CashTracker - Crear Cuenta",
}

const RegisterPage = () => {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Crea una cuenta</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>

            <RegisterForm />

            <NavigationUrl url="/auth/login" text="¿Ya tienes cuenta? Iniciar sessión" />
            <NavigationUrl url="/auth/forgot-password" text="¿Olvidaste tu contraseña? Restablecer" /> 
        </>
    )
}

export default RegisterPage
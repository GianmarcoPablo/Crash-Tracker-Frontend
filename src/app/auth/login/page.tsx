
import { LoginForm } from "@/presentation/components/auth/LoginForm"
import { NavigationUrl } from "@/presentation/components/auth/NavigationUrl"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "CashTracker - Iniciar session",
    description: "CashTracker - Iniciar session",
}

const LoginPage = () => {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Iniciar sessión</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>

            <LoginForm />
            <NavigationUrl url="/auth/register" text="¿No tienes una cuenta? Registrate" />
            <NavigationUrl url="/auth/forgot-password" text="¿Olvidaste tu contraseña? Restablecer" />
        </>
    )
}

export default LoginPage
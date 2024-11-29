
import { ForgotPasswordForm } from "@/presentation/components/auth/ForgotPasswordForm"
import { NavigationUrl } from "@/presentation/components/auth/NavigationUrl"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "CashTracker - Iniciar session",
    description: "CashTracker - Iniciar session",
}

const ForgotPasswordPage = () => {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">¿Olvidaste tu contraseña?</h1>
            <p className="text-3xl font-bold">aqui puedes <span className="text-amber-500">restablecerla</span></p>

            <ForgotPasswordForm />

            <NavigationUrl url="/auth/login" text="¿Ya tienes cuenta? Iniciar Session" />
            <NavigationUrl url="/auth/register" text="¿No tienes una cuenta? Registrate" />
        </>
    )
}

export default ForgotPasswordPage
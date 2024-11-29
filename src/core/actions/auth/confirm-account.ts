"use server"
import { confirmAccountSchema } from "@/core/schemas/auth/confirm-account.schema"
import { apiUrl } from "@/intrastructure/variables/variables"
import { z } from "zod"


export const confirmAccount = async (data: z.infer<typeof confirmAccountSchema>) => {
    try {

        const req = await fetch(`${apiUrl}/auth/confirm-account`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.token)
        })

        const json = await req.json()

        if (!req.ok) {
            return {
                ok: false,
                data: "Token no valido"
            }
        }
    } catch (error) {
        return {
            ok: false,
            data: "Ocurrio un problema con el token",
        }
    }
}
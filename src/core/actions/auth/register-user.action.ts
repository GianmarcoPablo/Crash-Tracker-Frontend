"use server"
import { z } from "zod"
import { apiUrl } from "@/intrastructure/variables/variables"
import { registerUserSchema } from "../../schemas/auth/register-user.schema"


export const registerUserAction = async (data: z.infer<typeof registerUserSchema>) => {
    try {
        const sendata = {
            email: data.email,
            password: data.password,
            name: data.name
        }


        const response = await fetch(`${apiUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendata),

        })
        const responseData = await response.json()

        if (responseData.error) {
            throw new Error()
        }

        return {
            ok: true,
            data: responseData,
        }
    } catch (error) {
        return {
            ok: false,
            data: "No se pudo registrar el usuario",
        }
    }
}
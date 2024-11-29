import { z } from "zod";

export const confirmAccountSchema = z.object({
    token: z.string()
        .min(6, { message: "Token no valido" })
        .length(6, { message: "Token no valido" }),
})

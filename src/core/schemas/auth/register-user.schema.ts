import { z } from "zod";

export const registerUserSchema = z
    .object({
        name: z
            .string({ required_error: "El nombre es obligatorio" })
            .min(1, { message: "El nombre no puede estar vacío" }),
        email: z
            .string({ required_error: "El correo es obligatorio" })
            .email({ message: "Email inválido" })
            .min(1, { message: "El correo no puede estar vacío" }),
        password: z
            .string({ required_error: "La contraseña es obligatoria" })
            .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
            .regex(/[a-zA-Z]/, { message: "La contraseña debe contener al menos una letra" })
            .regex(/[0-9]/, { message: "La contraseña debe contener al menos un número" })
            .regex(/[^a-zA-Z0-9]/, { message: "La contraseña debe contener al menos un caracter especial" })
            .trim(),
        password_confirmation: z.string({ required_error: "La confirmación de contraseña es obligatoria" }),
    })
    .refine((data) => data.password === data.password_confirmation, {
        message: "Las contraseñas no coinciden",
        path: ["password_confirmation"],
    });

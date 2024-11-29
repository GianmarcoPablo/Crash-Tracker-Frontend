"use client"

import { useState } from "react"
import { registerUserSchema } from "@/core/schemas/auth/register-user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/presentation/hooks/use-toast";
import { Form, FormMessage, FormControl, FormItem, FormLabel, FormField } from "../ui/form";
import { Input } from "../ui/input";
import { registerUserAction } from "@/core/actions/auth/register-user.action";

export const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const { toast } = useToast()

    const form = useForm<z.infer<typeof registerUserSchema>>({
        resolver: zodResolver(registerUserSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    })

    async function onSubmit(values: z.infer<typeof registerUserSchema>) {
        setIsLoading(true)
        const response = await registerUserAction(values)
        if (response.ok === false) {
            toast({
                title: "Error al registrar",
                description: response.data,
                variant: "destructive",
            })
            setIsLoading(false)
        } else {
            setIsSuccess(true)
            toast({
                title: "Registro exitoso",
                description: "Te enviamos un email con el link para confirmar tu cuenta",
                variant: "default",
            })
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }
    }


    return (
        <Form
            {...form}
        >
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-14 space-y-5"
            >
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold text-2xl">Email</FormLabel>
                                <FormControl>
                                    <Input type="email" className="w-full border border-gray-300 p-3 rounded-lg" placeholder="Tu email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold text-2xl">Nombre</FormLabel>
                                <FormControl>
                                    <Input type="text" className="w-full border border-gray-300 p-3 rounded-lg" placeholder="Nombre de registro" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold text-2xl">Password</FormLabel>
                                <FormControl>
                                    <Input type="password" className="w-full border border-gray-300 p-3 rounded-lg" placeholder="************" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="password_confirmation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold text-2xl">Confirmar Password</FormLabel>
                                <FormControl>
                                    <Input type="password" className="w-full border border-gray-300 p-3 rounded-lg" placeholder="************" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <input
                    disabled={isLoading || isSuccess}
                    type="submit"
                    value={isLoading ? "Creando cuenta..." : isSuccess ? "Redirigiendo..." : "Registrar"}
                    className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block"
                />
            </form>
        </Form>
    )
}

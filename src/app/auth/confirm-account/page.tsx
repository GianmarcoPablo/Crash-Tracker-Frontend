"use client"
import { confirmAccount } from "@/core/actions/auth/confirm-account"
import { confirmAccountSchema } from "@/core/schemas/auth/confirm-account.schema"
import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/presentation/components/ui"
import { toast } from "@/presentation/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


const ConfirmAccountPage = () => {

    const form = useForm<z.infer<typeof confirmAccountSchema>>({
        resolver: zodResolver(confirmAccountSchema),
        defaultValues: {
            token: "",
        },
    })

    async function onSubmit(data: z.infer<typeof confirmAccountSchema>) {
        const response = await confirmAccount(data)
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <>

            <h1 className="font-black text-6xl text-purple-950">Crea una cuenta</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>
            <div className="my-10">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="token"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>One-Time Password</FormLabel>
                                    <FormControl>
                                        <InputOTP inputMode={"numeric"} maxLength={6} {...field}>
                                            <InputOTPGroup >
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the one-time password sent to your phone.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </>
    )
}

export default ConfirmAccountPage
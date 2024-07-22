"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from '@/components/custom/card'

import { __ } from '@/lib/locale'

const formSchema = z.object({
    username: z.string().min(1, {
        message: __('username', 'required')
    }),
    password: z.string().min(1, {
        message: __('password', 'required')
    }).min(6, {
        message: __('password', 'minLength6')
    })
})

export interface LoginFormProps {
    onSubmit: (...args: any) => void;
}

export default function LoginForm({
    onSubmit
}: LoginFormProps) {
   

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        }
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Card
                    title={__('login')}
                    footer={<Button type="submit">{__('submit')}</Button>}
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    {__('username')}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    {__('password')}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </Card>
            </form>
        </Form>
    )
}
import React from 'react';
import {Button} from "../../../components/ui/button";
import {TextField} from "../../../components/ui/text-field";
import {useController, useForm} from "react-hook-form";
import {Checkbox} from "../../../components/ui/checkbox/checkbox";
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod'



const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean().default(false)
})

type FormValues = z.infer<typeof loginSchema>



export const LoginForm = () => {

    const {control,register, handleSubmit,
    formState: {errors}
    } = useForm<FormValues>({
        resolver: zodResolver(loginSchema)
    })

    console.log(errors)

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    const {
        field: {value, onChange},
    } = useController({
        name: 'rememberMe',
        control,
        defaultValue: false
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("email")}  label='email'
            errorMessage={errors.email?.message}
            />
            <TextField {...register("password")}  label='password'
                       errorMessage={errors.password?.message}
            />
            {/*<Checkbox onCheckedChange={onChange} checked={value} label={'remember me'}  />*/}
            <Button type={"submit"}>Login</Button>
        </form>
    );
};
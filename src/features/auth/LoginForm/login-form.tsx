import React from 'react';
import {Button} from "../../../components/ui/button";
import {TextField} from "../../../components/ui/text-field";
import {useController, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from '@hookform/resolvers/zod'
import s from "./styles.module.scss"
import {ControlledCheckbox} from "../../../components/ui/controlled/controlled-checkbox";
import { DevTool } from '@hookform/devtools'
import {ControlledTextField} from "../../../components/ui/controlled/controlled-text-field";


const loginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(3, "Password must be at least 3 characters"),
    rememberMe: z.literal(true, {
        errorMap: () => ({
            message: "Please check tre box",
        }),
    }),
});

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
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <DevTool control={control} />
            <ControlledTextField className={s.textField} {...register("email")}  label='email'
            errorMessage={errors.email?.message} control={control}
                                 placeholder={'email'}
            />
            <ControlledTextField className={s.textField} {...register("password")}  label='password'
                       errorMessage={errors.password?.message}
                                 control={control}
                                 placeholder={'password'}
                                 type={'password'}
                                 name={'password'}
            />
            <ControlledCheckbox className={s.checkbox} label={'remember me'} control={control} name={'rememberMe'}  />
            <Button variant={"primary"} className={s.button}>Login</Button>
        </form>
    );
};
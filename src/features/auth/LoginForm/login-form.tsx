import React from 'react';
import {Button} from "../../../components/ui/button";
import {TextField} from "../../../components/ui/text-field";
import {useController, useForm} from "react-hook-form";
import {Checkbox} from "../../../components/ui/checkbox/checkbox";

type FormValues = {
    email: string,
    password: string
}


export const LoginForm = () => {

    const {control,register, handleSubmit} = useForm<FormValues>()

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
            <TextField {...register("email",
                {required: 'Email is required',
                pattern: {value: `emailRegex`, message: 'Invalid email'} // уточнить по emailRegex
                }
            )}  label='email'/>
            <TextField {...register("password",{
                required: 'Password is required',
                minLength: {value: 3, message: "Password has to be at least 3 characters long"}
            })}  label='password'/>
            {/*<Checkbox onCheckedChange={onChange} checked={value} label={'remember me'}  />*/}
            <Button type={"submit"}>Login</Button>
        </form>
    );
};
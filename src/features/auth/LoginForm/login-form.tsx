import React from 'react';
import {Button} from "../../../components/ui/button";
import {TextField} from "../../../components/ui/text-field";
import {useForm} from "react-hook-form";
import {CheckBox} from "../../../components/ui/checkbox/checkbox";

type FormValues = {
    email: string,
    password: string
}


export const LoginForm = () => {

    const {register, handleSubmit} = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("email")}  label='email'/>
            <TextField {...register("password")}  label='password'/>
            <CheckBox/>
            <Button type={"submit"}>Login</Button>
        </form>
    );
};



import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {omit} from 'remeda'
import {DevTool} from '@hookform/devtools'
import {Card} from "../../../components/ui/card";
import s from "./sign-up.module.scss"
import {Typography} from "../../../components/ui/typography";
import {ControlledTextField} from "../../../components/ui/controlled/controlled-text-field";
import {Button} from "../../../components/ui/button";
import {Link} from "react-router-dom";

const schema = z
    .object({
        email: z.string().email('Invalid email address').nonempty('Enter email'),
        password: z.string().nonempty('Enter password'),
        passwordConfirmation: z.string().nonempty('Confirm your password'),
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.passwordConfirmation) {
            ctx.addIssue({
                message: 'Passwords do not match',
                code: z.ZodIssueCode.custom,
                path: ['passwordConfirmation'],
            })
        }
        return data
    })

type FormType = z.infer<typeof schema>

type SignUpProps = {
    onSubmit: (data: Omit<FormType, 'passwordConfirmation'>) => void
}

export const SignUp = (props: SignUpProps) => {
    const {control, handleSubmit} = useForm<FormType>({
        mode: 'oSubmit',
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
            passwordConfirmation: '',
        }
    })

    const handleFormSubmitted = handleSubmit(data => props.onSubmit(omit(data, ['passwordConfirmation'])))

    return (
        <>
            <DevTool control={control}/>
            <Card className={s.card}>
                <Typography variant={"large"} className={s.title}>
                    Sign Up
                </Typography>
                <form onSubmit={handleFormSubmitted}>
                    <div className={s.form}>
                        <ControlledTextField
                            placeholder={'NickName'}
                            name={'NickName'}
                            control={control}
                        />
                        <ControlledTextField
                            placeholder={'Name'}
                            name={'Name'}
                            control={control}
                        />
                        <ControlledTextField
                            placeholder={'SurName'}
                            name={'SurName'}
                            control={control}
                        />
                        <ControlledTextField
                            placeholder={'Email'}
                            name={'email'}
                            control={control}
                        />
                        <ControlledTextField
                            placeholder={'Confirm email'}
                            name={'confirm email'}
                            control={control}
                        />
                        <ControlledTextField
                            placeholder={'Password'}
                            type={'password'}
                            name={'password'}
                            control={control}
                        />
                        <ControlledTextField
                            placeholder={'Confirm password'}
                            type={'password'}
                            name={'confirm password'}
                            control={control}
                        />
                    </div>
                    <Button type={'submit'} className={s.button}>
                        Sign Up
                    </Button>
                </form>
                <Typography variant={'subtitle1'} className={s.caption}>
                    Already have an account?
                </Typography>
                <Typography variant="link1" as={Link} to="/login" className={s.signInLink}>
                    Sign In
                </Typography>
            </Card>
        </>
    )

}
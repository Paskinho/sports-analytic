import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { omit } from 'remeda'
import { DevTool } from '@hookform/devtools'
import {Card} from "../../../components/ui/card";
import s from "./sign-up.module.scss"
import {Typography} from "../../../components/ui/typography";

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

    const handleFormSubmitted = handleSubmit (data => props.onSubmit(omit(data, ['passwordConfirmation'])))

    return (
        <>
        <DevTool control={control}/>
            <Card className={s.card}>
  <Typography variant={"large"} className={s.title}/>
            </Card>
        </>
    )

}
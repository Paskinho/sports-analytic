import {DevTool} from '@hookform/devtools'
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card} from "../../../components/ui/card";
import s from './recovery-password.module.scss'
import {Typography} from "../../../components/ui/typography";


const schema = z.object({
    email: z.string().email('Invalid email address').nonempty('Enter email'),
})

type FormType = z.infer<typeof schema>

type RecoveryPasswordProps = {
    onSubmit: (data) => void
}

export const RecoveryPassword = (props: RecoveryPasswordProps) => {
    const {control, handleSubmit} = useForm<FormType>({
        mode: "OnSubmit",
        resolver: zodResolver(schema),
        defaultValues: {
            email: ''
        }
    })

    const handleFormSubmitted = handleSubmit(props.onSubmit)


    return (
        <>
            <DevTool control={control}/>
            <Card className={s.card}>
                <Typography variant={'large'} className={s.title}>
    Forgot your password?
                </Typography>
            </Card>
        </>
    )
}
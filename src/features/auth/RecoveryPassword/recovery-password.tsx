import {DevTool} from '@hookform/devtools'
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card} from "../../../components/ui/card";
import s from './recovery-password.module.scss'
import {Typography} from "../../../components/ui/typography";
import {ControlledTextField} from "../../../components/ui/controlled/controlled-text-field";
import {Button} from "../../../components/ui/button";
import {Link} from "react-router-dom";


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
                <form onSubmit={handleFormSubmitted}>
                    <div className={s.form}>
                        <ControlledTextField placeholder={'Email'} name={'email'} control={control}/>
                    </div>
                    <Typography variant={'subtitle1'} className={s.instructions}>
                        Enter you email address and we will send you further instructions
                    </Typography>
                    <Button className={s.button} fullWidth type={'submit'}>
                        Send Instructions
                    </Button>
                </form>
                <Typography variant={'subtitle1'} className={s.caption}>
                    Did you remember your password?
                </Typography>
                <Typography variant={'link1'} as={Link} to={'sing-in'} className={s.loginLink}>
                    Try logging in
                </Typography>
            </Card>
        </>
    )
}
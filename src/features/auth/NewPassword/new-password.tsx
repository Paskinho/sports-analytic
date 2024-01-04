import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import {DevTool} from '@hookform/devtools'
import {Card} from "../../../components/ui/card";
import s from './new-password.module.scss'
import {Typography} from "../../../components/ui/typography";
import {ControlledTextField} from "../../../components/ui/controlled/controlled-text-field";
import {Button} from "../../../components/ui/button";

const schema = z.object({
    password: z.string().nonempty('Enter password'),
})

type FormType = z.infer<typeof schema>


type NewPasswordProps = {
    onSubmit: (data: FormType) => void
}

export const NewPassword = (props: NewPasswordProps) => {
    const {control, handleSubmit} = useForm<FormType>({
        mode: 'onSubmit',
        resolver: zodResolver(schema),
        defaultValues: {
            password: "",
        }
    })

    const handleFormSubmitted = handleSubmit(props.onSubmit)

    return (
        <>
            <DevTool control={control}/>
            <Card className={s.card}>
                <Typography variant={'large'} className={s.title}>
                    Create new password
                </Typography>
                <form onSubmit={handleFormSubmitted}>
                    <ControlledTextField
                        placeholder={"Password"}
                        name={'password'}
                        control={control}
                        type={'password'}
                        containerProps={{className: s.input}}
                    >

                    </ControlledTextField>
                    <Typography variant={'caption'} className={s.instructions}>
                        Create new password and we will send you further instructions to email
                    </Typography>
                        <Button fullWidth type={"submit"}>
                            Create new password
                        </Button>
                </form>
            </Card>
        </>
    )


}
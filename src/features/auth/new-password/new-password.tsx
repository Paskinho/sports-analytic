import {z} from "zod";
import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import {DevTool} from '@hookform/devtools'
import {Card} from "../../../components/ui/card";
import s from './new-password.module.scss'

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

     </Card>
 </>
    )


}
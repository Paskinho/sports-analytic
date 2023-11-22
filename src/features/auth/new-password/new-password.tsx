import {z} from "zod";
import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'


const schema = z.object({
    password: z.string().nonempty('Enter password'),
})

type FormType = z.infer<typeof schema>


type NewPasswordProps = {
    onSubmit: (data: FormType) => void
}

export const newPassword = (props: NewPasswordProps) => {
const {conrol, handleSubmit} = useForm<FormType>({
    mode: 'onSubmit',
    resolver: zodResolver(schema)
})



}
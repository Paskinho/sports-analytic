
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const schema = z.object({
    email: z.string().email('Invalid email address').nonempty('Enter email'),
})

type FormType = z.infer<typeof schema>

type RecoveryPasswordProps = {
    onSubmit: (data)=> void
}

export const RecoveryPassword = (props: RecoveryPasswordProps) => {
    const {control, handleSubmit} = useForm<FormType>({
        mode: "OnSubmit",
        resolver: zodResolver(schema),
        defaultValues: {
            email:''
        }
    })

    const handleFormSubmitted = handleSubmit(props.onSubmit)

}
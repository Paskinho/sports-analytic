import {z} from "zod";

const schema = z.object({
    password: z.string().nonempty('Enter password'),
})

type FormType = z.infer<typeof schema>


type NewPasswordProps = {
    onSubmit: (data: FormType) => void
}

export const newPassword = (props: NewPasswordProps) => {




}
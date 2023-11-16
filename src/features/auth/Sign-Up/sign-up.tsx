import {z} from "zod";

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

export const SignUp = () => {


}
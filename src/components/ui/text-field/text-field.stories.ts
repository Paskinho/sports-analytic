import {TextField} from "./text-field";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Components/TextField",
    component: TextField,
    tags: ['autodocs'],
    argTypes:{}

} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder'
    }
}

export const Password: Story = {
    args: {
        label: 'Label',
        placeholder: 'Password',
        type: 'password',
    },
}

export const Error: Story = {
    args: {
        label: 'Input with error',
        value: 'Wrong value',
        errorMessage: 'Error message',
    },
}
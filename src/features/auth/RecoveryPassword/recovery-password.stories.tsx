import type { Meta, StoryObj } from '@storybook/react'


import {RecoveryPassword} from "./recovery-password";

const meta = {
    title: 'Auth/Recover password',
    component: RecoveryPassword,
    tags: ['autodocs'],
} satisfies Meta<typeof RecoveryPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        onSubmit: data => console.info(data),
    },
}
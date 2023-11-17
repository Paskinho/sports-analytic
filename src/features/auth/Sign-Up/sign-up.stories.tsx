import {SignUp} from "./sign-up";
import {Meta} from "@storybook/blocks";
import {StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/SignUp',
    component: SignUp,
    tags: ['autodocs'],
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        onSubmit: data => console.info(data),
    },
}
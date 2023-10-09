import {Checkbox} from "./checkbox";
import {Meta,StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Uncontrolled: Story = {
    args: {
        label: "Click here",
        disabled: false
    }
}

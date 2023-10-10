import {Toggle} from "./toggle";
import {StoryObj} from "@storybook/react";

const meta = {
    title: 'Component/Toggle',
    component: Toggle,
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: "Players"
    }
}
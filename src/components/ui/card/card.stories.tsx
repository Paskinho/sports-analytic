import {Card} from "./card";
import {Story, StoryObj} from "@storybook/react";

const meta = {
    title: 'Component/Card',
    component: Card,
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Card content'
    }
}
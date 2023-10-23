import {Slider} from "./slider";
import {Story, StoryObj} from "@storybook/react";

const meta = {
    title: 'Component/Slider',
    component: Slider
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        children: {

        }
    }
}
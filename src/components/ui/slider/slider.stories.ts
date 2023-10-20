import {Slider} from "./slider";
import {Meta} from "@storybook/blocks";
import {Story} from "@storybook/react";

const meta = {
    title: 'Component/Slider',
    component: Slider
} satisfies Meta<typeof Slider>

export const Default: Story = {
    args: {
        children
    }
}
import {Typography} from "./typography";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {

    }
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>
import {Table} from "./table";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Component/Table',
    component: Table
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        children:

}
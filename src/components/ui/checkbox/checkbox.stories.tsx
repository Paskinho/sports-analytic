import {Checkbox} from "./";
import {StoryObj} from "@storybook/react";
import {Meta} from "@storybook/blocks";
import {useState} from "react";


const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof meta>
export const Uncontrolled: Story = {
    args: {
        label: 'Click here',
        disabled: false,
    },
}

export const Controlled: Story = {
    render: args => {
        const [checked, setChecked] = useState(false)

        return (
            <Checkbox
                {...args}
                label="Click here"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
        )
    },
}
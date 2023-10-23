import {Modal} from "./modal";
import {Meta} from "@storybook/blocks";
import {StoryObj} from "@storybook/react";

const meta = {
    title: "Components/Modal",
    component: Modal
} satisfies Meta <typeof Modal>

export default meta
type Story = StoryObj<typeof meta>
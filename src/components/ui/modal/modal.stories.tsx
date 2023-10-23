import {Modal} from "./modal";
import {Meta} from "@storybook/blocks";
import {StoryObj} from "@storybook/react";
import {Typography} from "../typography";

const meta = {
    title: "Components/Modal",
    component: Modal
} satisfies Meta <typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
      children: (
          <>
          <Typography>Hello</Typography>
          </>
      ),
      open: true
  }
}
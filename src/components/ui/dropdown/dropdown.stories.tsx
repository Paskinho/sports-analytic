import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import  Edit from '../../../assets/icons/edit'

import { Dropdown, DropdownItemWithIcon } from '.'

const meta = {
    title: 'Components/Dropdown',
    component: Dropdown,
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        children: (
            <>
                <DropdownItemWithIcon icon={<Edit />} text="Change" onSelect={() => {}} />
                <DropdownItemWithIcon icon={<Edit />} text="Delete" onSelect={() => {}} />
                <DropdownItemWithIcon icon={<Edit />} text="Delete" onSelect={() => {}} />
                <DropdownItemWithIcon icon={<Edit />} text="Delete" onSelect={() => {}} />
                <DropdownItemWithIcon icon={<Edit />} text="Delete" onSelect={() => {}} />
            </>
        ),
        trigger: <button>open</button>,
    },
}
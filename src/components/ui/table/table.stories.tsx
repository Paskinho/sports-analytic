import {Table} from "./table";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Component/Table',
    component: Table
} as Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        children: (
            <>
            <Table.Head>
                <Table.Row>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell align={'center'}>Description</Table.HeadCell>
                    <Table.HeadCell>Link</Table.HeadCell>
                    <Table.HeadCell>Type</Table.HeadCell>
                    <Table.HeadCell>View</Table.HeadCell>
                    <Table.HeadCell/>
                </Table.Row>
            </Table.Head>
                <Table.Body>
                    <Table.Row>

                    </Table.Row>
                </Table.Body>
            </>
        )

}}
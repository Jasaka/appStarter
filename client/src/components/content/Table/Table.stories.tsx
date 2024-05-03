import type {Meta, StoryObj} from '@storybook/react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from './Table';

const meta = {
    title: 'Components/Content/Table',
    component: Table,
    // @ts-ignore
    subcomponents: {TableHead, TableHeader, TableBody, TableCell, TableRow},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        bleed: false,
        dense: false,
        grid: false,
        striped: false,
    },
    render: (args) => (
        <Table {...args}>
            <TableHead>
                <TableRow>
                    <TableHeader>Header 1</TableHeader>
                    <TableHeader>Header 2</TableHeader>
                    <TableHeader>Header 3</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Row 1, Cell 1</TableCell>
                    <TableCell>Row 1, Cell 2</TableCell>
                    <TableCell>Row 1, Cell 3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Row 2, Cell 1</TableCell>
                    <TableCell>Row 2, Cell 2</TableCell>
                    <TableCell>Row 2, Cell 3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Row 3, Cell 1</TableCell>
                    <TableCell>Row 3, Cell 2</TableCell>
                    <TableCell>Row 3, Cell 3</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    ),
};

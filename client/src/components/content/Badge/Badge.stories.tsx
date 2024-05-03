import type {Meta, StoryObj} from '@storybook/react';
import {Badge, colors} from './Badge';

const meta = {
    title: 'Components/Content/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: 'lime',
        children: 'Badge',
    },
};

export const AllColors: Story = {
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates all the available colors for the `Badge` component.',
            },
        },
    },
    render: ({}) => {
        return (
            <div className="grid grid-cols-4 gap-4">
                {Object.entries(colors).map(([key, value]) => (
                    <Badge key={key} color={key as keyof typeof colors}>
                        {key}
                    </Badge>
                ))}
            </div>
        )
    }
}

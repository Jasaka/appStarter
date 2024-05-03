import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Button, styles} from './Button';

const meta = {
    title: 'Components/Control/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        color: {control: 'text'},
        outline: {control: 'boolean'},
        plain: {control: 'boolean'},
        children: {control: 'text'},
    },
    args: {onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: 'emerald',
        children: 'This be a button',
    },
};

// @ts-ignore
export const AllColors: Story = {
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates all the available colors for the `Button` component.',
            },
        },
    },
    render: () => {
        return (
            <div className="grid grid-cols-4 gap-4">
                {Object.entries(styles.colors).map(([key, value]) => (
                    <Button key={key} color={key as keyof typeof styles.colors}>
                        {key}
                    </Button>
                ))}
            </div>
        )
    }
}


import type {Meta, StoryObj} from '@storybook/react';
import {BadgeButton} from './BadgeButton';

const meta = {
    title: 'Components/Control/BadgeButton',
    component: BadgeButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof BadgeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: 'zinc',
        children: 'BadgeButton',
        href: '#',
    },
};


import type {Meta, StoryObj} from '@storybook/react';
import {AvatarButton} from './AvatarButton';

const meta = {
    title: 'Components/Control/AvatarButton',
    component: AvatarButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AvatarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <AvatarButton
            size={"12"}
            src="https://i.pravatar.cc/150?img=51"
            alt="Avatar"
            href={"#"}
        />
    ),
};


import type {Meta, StoryObj} from '@storybook/react';
import {Link} from './Link';

const meta = {
    title: 'Components/Control/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: "https://example.com",
        children: "link"
    },
};

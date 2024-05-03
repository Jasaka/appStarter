import type {Meta, StoryObj} from '@storybook/react';
import {Code, Strong, Text, TextLink, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6} from './Text';

const meta = {
    title: 'Components/Content/Text',
    component: Text,
    subcomponents: {
        // @ts-ignore
        TextLink, Strong, Code, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6
    },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Text>
            This is a text component. It is used to display text on the screen. It is a simple component that can be
            used for a variety of purposes.
        </Text>
    ),
};

export const WithLink: Story = {
    render: () => (
        <Text>
            This is a text component with a link. It is used to display text on the screen. It is a simple component
            that can be used for a variety of purposes. <TextLink href="#">Learn more</TextLink>
        </Text>
    ),
};

export const WithStrong: Story = {
    render: () => (
        <Text>
            This is a text component with a strong tag. It is used to display text on the screen. It is a <Strong>simple
            component</Strong> that can be used for a variety of purposes.
        </Text>
    ),
};

export const WithCode: Story = {
    render: () => (
        <Text>
            This is a text component with a code tag. It is used to display text on the screen. It is a simple component
            that can be used for a variety of purposes. <Code>console.log(&quot;Hello, world!&quot;);</Code>
        </Text>
    ),
};

export const Heading1Example: Story = {
    render: () => (
        <Heading1>
            This is a heading 1.
        </Heading1>
    ),
};

export const Heading2Example: Story = {
    render: () => (
        <Heading2>
            This is a heading 2.
        </Heading2>
    ),
};

export const Heading3Example: Story = {
    render: () => (
        <Heading3>
            This is a heading 3.
        </Heading3>
    ),
};

export const Heading4Example: Story = {
    render: () => (
        <Heading4>
            This is a heading 4.
        </Heading4>
    ),
};

export const Heading5Example: Story = {
    render: () => (
        <Heading5>
            This is a heading 5.
        </Heading5>
    ),
};

export const Heading6Example: Story = {
    render: () => (
        <Heading6>
            This is a heading 6.
        </Heading6>
    ),
};
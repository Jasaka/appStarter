import type {Meta, StoryObj} from '@storybook/react';
import Flex, {Column, Row} from "@/components/container/Flex/Flex";

// @ts-ignore
const meta = {
    title: 'Components/Container/Flex',
    component: Flex,
    subcomponents: {
        // @ts-ignore
        Column, Row
    },
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Default: Story = {
    render: (args) => {
        return (
            <Flex>
                <Flex> Hello </Flex>
                <Flex> Hello </Flex>
                <Flex> Hello </Flex>
                <Flex> Hello </Flex>
                <Flex type={"col"}>
                    <Flex> Hello </Flex>
                    <Flex> Hello </Flex>
                    <Flex> Hello </Flex>
                    <Flex> Hello </Flex>
                </Flex>
            </Flex>
        );
    },
};


import type {Meta, StoryObj} from '@storybook/react';
import {Alert, AlertActions, AlertDescription, AlertTitle} from './Alert';
import {Button} from "@/components/control/Button/Button";
import {useState} from "react";

// @ts-ignore
const meta = {
    title: 'Components/Container/Alert',
    component: Alert,
    subcomponents: {
        // @ts-ignore
        AlertActions, AlertDescription, AlertTitle
    },
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Default: Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Alert</Button>
                <Alert {...args} open={isOpen} onClose={setIsOpen}>
                    <AlertTitle>This is an alert</AlertTitle>
                    <AlertDescription>This is a description</AlertDescription>
                    <AlertActions>
                        <Button color={"blue"} onClick={() => setIsOpen(false)}>Ok</Button>
                        <Button color={"red"} onClick={() => setIsOpen(false)}>Cancel</Button>
                    </AlertActions>
                </Alert>
            </>
        );
    },
};


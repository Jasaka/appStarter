import type {Meta, StoryObj} from '@storybook/react';
import {Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle} from './Dialog';
import {Button} from "@/components/control/Button/Button";
import {Text} from "@/components/content/Text/Text";
import {useState} from "react";

const meta = {
    title: 'Components/Container/Dialog',
    component: Dialog,
    subcomponents: {
        // @ts-ignore
        DialogActions,DialogBody, DialogDescription, DialogTitle
    },
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Default: Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button type="button" onClick={() => setIsOpen(true)}>
                    Open Dialog
                </Button>
                <Dialog {...args} open={isOpen} onClose={setIsOpen}>
                    <DialogTitle>This is a Dialog</DialogTitle>
                    <DialogDescription>
                        This is a description
                    </DialogDescription>
                    <DialogBody>
                        <Text>
                            This is a body.
                        </Text>
                    </DialogBody>
                    <DialogActions>
                        <Button plain onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={() => setIsOpen(false)}>Refund</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    },
};


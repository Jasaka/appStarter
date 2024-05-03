import type {Meta, StoryObj} from '@storybook/react';
import {Listbox, ListboxDescription, ListboxLabel, ListboxOption} from './Listbox';
import {Description, ErrorMessage, Field, Label} from "@/components/form/Fieldset/Fieldset";
import {Bars3BottomLeftIcon, Bars3BottomRightIcon, Bars3Icon} from "@heroicons/react/16/solid";
import {useState} from "react";
import {Field as HeadlessField} from '@headlessui/react'

const meta = {
    title: 'Components/Form/Listbox',
    component: Listbox,
    // @ts-ignore
    subcomponents: {ListboxOption, ListboxLabel, ListboxDescription},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Listbox name="status" defaultValue="active">
            <ListboxOption value="active">
                <ListboxLabel>Active</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="paused">
                <ListboxLabel>Paused</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="delayed">
                <ListboxLabel>Delayed</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="canceled">
                <ListboxLabel>Canceled</ListboxLabel>
            </ListboxOption>
        </Listbox>
    )
};

export const WithLabelAndDescription: Story = {
    render: () => (
        <Field>
            <Label>Status</Label>
            <Description>Select the status of the product.</Description>
            <Listbox name="status" defaultValue="active">
                <ListboxOption value="active">
                    <ListboxLabel>Active</ListboxLabel>
                </ListboxOption>
                <ListboxOption value="paused">
                    <ListboxLabel>Paused</ListboxLabel>
                </ListboxOption>
                <ListboxOption value="delayed">
                    <ListboxLabel>Delayed</ListboxLabel>
                </ListboxOption>
                <ListboxOption value="canceled">
                    <ListboxLabel>Canceled</ListboxLabel>
                </ListboxOption>
            </Listbox>
        </Field>
    )
}

export const ValidationError: Story = {
    render: () => (
        <Field>
            <Label>Project status</Label>
            <Listbox name="status" placeholder="Select a status&hellip;" invalid>
                <ListboxOption value="active">
                    <ListboxLabel>Active</ListboxLabel>
                </ListboxOption>
                <ListboxOption value="paused">
                    <ListboxLabel>Paused</ListboxLabel>
                </ListboxOption>
                <ListboxOption value="delayed">
                    <ListboxLabel>Delayed</ListboxLabel>
                </ListboxOption>
                <ListboxOption value="canceled">
                    <ListboxLabel>Canceled</ListboxLabel>
                </ListboxOption>
            </Listbox>
            <ErrorMessage>Here be error.</ErrorMessage>
        </Field>
    )
}

export const CustomLayout: Story = {
    render: () => (
        <HeadlessField className="flex items-baseline justify-center gap-6">
            <Label className={"min-w-fit font-medium"}>Project status</Label>
            <Listbox name="status" defaultValue="active" className="max-w-48">
                <ListboxOption value="active">
                    <ListboxLabel>Active</ListboxLabel>
                </ListboxOption>
                <ListboxOption value="paused">
                    <ListboxLabel>Paused</ListboxLabel>
                </ListboxOption>
                <ListboxOption value="delayed">
                    <ListboxLabel>Delayed</ListboxLabel>
                </ListboxOption>
                <ListboxOption value="canceled">
                    <ListboxLabel>Canceled</ListboxLabel>
                </ListboxOption>
            </Listbox>
        </HeadlessField>
    )
}

export const SecondaryText: Story = {
    render: () => (
        <Field>
            <Listbox name="status" defaultValue="active">
                <ListboxOption value="active">
                    <ListboxLabel>Active</ListboxLabel>
                    <ListboxDescription>Other Text</ListboxDescription>
                </ListboxOption>
                <ListboxOption value="paused">
                    <ListboxLabel>Paused</ListboxLabel>
                    <ListboxDescription>Other Text</ListboxDescription>
                </ListboxOption>
                <ListboxOption value="delayed">
                    <ListboxLabel>Delayed</ListboxLabel>
                    <ListboxDescription>Other Text</ListboxDescription>
                </ListboxOption>
                <ListboxOption value="canceled">
                    <ListboxLabel>Canceled</ListboxLabel>
                    <ListboxDescription>Other Text</ListboxDescription>
                </ListboxOption>
            </Listbox>
        </Field>
    )
}

export const Controlled: Story = {
    render: () => {
        let [status, setStatus] = useState('active')

        return (
            <Field>
                <Label>Project status</Label>
                <Listbox name="status" value={status} onChange={setStatus}>
                    <ListboxOption value="active">
                        <ListboxLabel>Active</ListboxLabel>
                    </ListboxOption>
                    <ListboxOption value="paused">
                        <ListboxLabel>Paused</ListboxLabel>
                    </ListboxOption>
                    <ListboxOption value="delayed">
                        <ListboxLabel>Delayed</ListboxLabel>
                    </ListboxOption>
                    <ListboxOption value="canceled">
                        <ListboxLabel>Canceled</ListboxLabel>
                    </ListboxOption>
                </Listbox>
            </Field>
        )
    }
}

export const WithIcon: Story = {
    render: () => (
        <Field>
            <Label>Alignment</Label>
            <Listbox name="alignment" defaultValue="left">
                <ListboxOption value="left">
                    <Bars3BottomLeftIcon/>
                    <ListboxLabel>Left</ListboxLabel>
                </ListboxOption>
                <ListboxOption value="right">
                    <Bars3BottomRightIcon/>
                    <ListboxLabel>Right</ListboxLabel>
                </ListboxOption>
                <ListboxOption value="justified">
                    <Bars3Icon/>
                    <ListboxLabel>Justified</ListboxLabel>
                </ListboxOption>
            </Listbox>
        </Field>
    )
}
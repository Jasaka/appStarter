import type {Meta, StoryObj} from '@storybook/react';
import {Select} from './Select';
import {Description, ErrorMessage, Field, Label} from "@/components/form/Fieldset/Fieldset";
import {Field as HeadlessField} from '@headlessui/react'

const meta = {
    title: 'Components/Form/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Select aria-label="Project status" name="status">
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
        </Select>
    )
};

export const WithLabelAndDescription: Story = {
    render: () => (
        <Field>
            <Label>Project status</Label>
            <Description>Choose the status of the project.</Description>
            <Select aria-label="Project status" name="status">
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="delayed">Delayed</option>
                <option value="canceled">Canceled</option>
            </Select>
        </Field>
    )
}

export const ValidationError: Story = {
    render: () => (
        <Field>
            <Label>Project status</Label>
            <Description>Choose the status of the project.</Description>
            <Select aria-label="Project status" name="status" invalid>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="delayed">Delayed</option>
                <option value="canceled">Canceled</option>
            </Select>
            <ErrorMessage>This field is required</ErrorMessage>
        </Field>
    )
}

export const CustomLayout: Story = {
    render: () => (
        <HeadlessField className="flex items-baseline justify-center gap-6">
            <Label className={"min-w-fit font-medium"}>Project status</Label>
            <Select name="status" className="max-w-48">
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="delayed">Delayed</option>
                <option value="canceled">Canceled</option>
            </Select>
        </HeadlessField>
    )
}
import type {Meta, StoryObj} from '@storybook/react';
import {Textarea} from './Textarea';
import {Description, ErrorMessage, Field, Label} from "@/components/form/Fieldset/Fieldset";
import {Field as HeadlessField} from '@headlessui/react'

const meta = {
    title: 'Components/Form/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabelAndDescription: Story = {
    render: () => (
        <Field>
            <Label>Description</Label>
            <Description>This will be shown under the product title.</Description>
            <Textarea name="name"/>
        </Field>
    )
};

export const CustomLayout: Story = {
    render: () => (
        <HeadlessField className="grid grid-cols-12 gap-6">
            <div className="col-span-5">
                <Label className={"min-w-fit font-medium"}>Description</Label>
                <Description className="mt-1">This will be shown under the product title.</Description>
            </div>
            <div className="col-span-7">
                <Textarea name="description" rows={3}/>
            </div>
        </HeadlessField>
    )
};

export const ValidationError: Story = {
    render: () => (
        <Field>
            <Label>Description</Label>
            <Description>This will be shown under the product title.</Description>
            <Textarea name="name" invalid/>
            <ErrorMessage>Field is required</ErrorMessage>
        </Field>
    )
};
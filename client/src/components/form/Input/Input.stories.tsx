import type {Meta, StoryObj} from '@storybook/react';
import {Input} from './Input';
import {Description, ErrorMessage, Field, Label} from "@/components/form/Fieldset/Fieldset";
import {useState} from "react";
import {Field as HeadlessField} from '@headlessui/react';

const meta = {
    title: 'Components/Form/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithLabelAndDescription: Story = {
    render: () => (
        <Field>
            <Label>Product name</Label>
            <Description> Use the name you &apos;d like people to see in their cart.</Description>
            <Input name="product_name"/>
        </Field>
    )
}

export const ValidationErrors: Story = {
    render: () => (
        <Field>
            <Label>Full name</Label>
            <Input name="full_name" invalid/>
            <ErrorMessage>No full name privided</ErrorMessage>
        </Field>
    )
}

export const Controlled: Story = {
    render: () => {
        let [name, setName] = useState('')

        return (
            <Field>
                <Label>Full name</Label>
                <Input name="full_name" value={name} onChange={(e) => setName(e.target.value)}/>
            </Field>
        )
    }
}

export const CustomLayout: Story = {
    render: () => (
        <HeadlessField className="flex items-baseline justify-center gap-6">
            <Label className={"font-medium w-20"}>Full name</Label>
            <Input name="full_name" className="max-w-48" placeholder=" "/>
        </HeadlessField>
    )
}
import type {Meta, StoryObj} from '@storybook/react';
import {Description, Field, FieldGroup, Fieldset, Label, Legend, ErrorMessage} from './Fieldset';
import {Text} from '../../content/Text/Text';
import {Select} from "@/components/form/Select/Select";
import {Textarea} from "@/components/form/Textarea/Textarea";
import {Field as HeadlessField} from '@headlessui/react'
import {Input} from '../Input/Input';

const meta = {
    title: 'Components/Form/Fieldset',
    component: Fieldset,
    // @ts-ignore
    subcomponents: {Description, Field, FieldGroup, Label, Legend, ErrorMessage},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Fieldset>
            <Legend>Fieldset legend</Legend>
            <Text>
                Fieldset text
            </Text>
            <FieldGroup>
                <Field>
                    <Label>
                        Field label
                    </Label>
                    <Select name="Initial">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </Select>
                    <Description>
                        Field description
                    </Description>
                </Field>
                <Field>
                    <Label>
                        Field label
                    </Label>
                    <Textarea name="InitialText"/>
                    <Description>
                        Field description
                    </Description>
                </Field>
            </FieldGroup>
        </Fieldset>
    )
};

export const CustomLayout: Story = {
    render: () => (
        <Fieldset>
            <Legend>Shipping details</Legend>
            <Text>Without this your odds of getting your order are low.</Text>
            <div data-slot="control" className="grid grid-cols-1 items-center gap-x-4 gap-y-6 sm:grid-cols-3">
                <HeadlessField className="grid grid-cols-[subgrid] sm:col-span-3">
                    <Label>Full name</Label>
                    <Input className="mt-3 sm:col-span-2 sm:mt-0" name="full_name"/>
                </HeadlessField>
                <HeadlessField className="grid grid-cols-[subgrid] sm:col-span-3">
                    <Label>Street address</Label>
                    <Input className="mt-3 sm:col-span-2 sm:mt-0" name="street_address"/>
                </HeadlessField>
                <HeadlessField className="grid grid-cols-[subgrid] sm:col-span-3">
                    <Label>Country</Label>
                    <Select className="mt-3 sm:col-span-2 sm:mt-0" name="country">
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>United States</option>
                    </Select>
                </HeadlessField>
                <HeadlessField className="grid grid-cols-[subgrid] sm:col-span-3">
                    <Label>Delivery notes</Label>
                    <Textarea className="mt-3 sm:col-span-2 sm:mt-0" name="notes"/>
                </HeadlessField>
            </div>
        </Fieldset>
    )
}

export const GridLayout: Story = {
    render: () => (
        <Fieldset>
            <Legend>Shipping details</Legend>
            <Text>Without this your odds of getting your order are low.</Text>
            <FieldGroup>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
                    <Field>
                        <Label>First name</Label>
                        <Input name="first_name"/>
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <Input name="last_name"/>
                    </Field>
                </div>
                <Field>
                    <Label>Street address</Label>
                    <Input name="street_address"/>
                </Field>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
                    <Field className="sm:col-span-2">
                        <Label>Country</Label>
                        <Select name="country">
                            <option>Canada</option>
                            <option>Mexico</option>
                            <option>United States</option>
                        </Select>
                    </Field>
                    <Field>
                        <Label>Postal code</Label>
                        <Input name="postal_code"/>
                    </Field>
                </div>
                <Field>
                    <Label>Delivery notes</Label>
                    <Textarea name="notes"/>
                    <Description>If you have a tiger, we'd like to know about it.</Description>
                </Field>
            </FieldGroup>
        </Fieldset>
    )
}
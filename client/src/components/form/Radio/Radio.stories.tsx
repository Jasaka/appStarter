import type {Meta, StoryObj} from '@storybook/react';
import {Radio, RadioField, RadioGroup, colors} from './Radio';
import {Description, Fieldset, Label, Legend} from "@/components/form/Fieldset/Fieldset";
import {Text} from "@/components/content/Text/Text";
import {useState} from "react";
import {
    Field as HeadlessField,
    Fieldset as HeadlessFieldset,
    Label as HeadlessLabel,
    Legend as HeadlessLegend,
    RadioGroup as HeadlessRadioGroup,
} from '@headlessui/react'

const meta = {
    title: 'Components/Form/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: "1",
    },
    render: ({value}) => (
        <RadioGroup>
            <RadioField>
                <Radio value={value}/>
            </RadioField>
        </RadioGroup>
    )
};


const WithLabel: Story = {
    args: {
        value: "1",
    },
    render: ({value}) => (
        <RadioGroup>
            <RadioField>
                <Radio value={value}/>
                <Label>Allow tickets to be resold</Label>
            </RadioField>
        </RadioGroup>
    )
};

const WithLabelAndDescription: Story = {
    args: {
        value: "1",
    },
    render: ({value}) => (
        <RadioGroup>
            <RadioField>
                <Radio value={value}/>
                <Label>Allow tickets to be resold</Label>
                <Description>
                    Customers can resell or transfer their tickets if they can’t make it to the event.
                </Description>
            </RadioField>
        </RadioGroup>
    )
};

export const WithMultipleOptions: Story = {

    args: {
        value: "1",
    },
    render: ({value}) => (
        <Fieldset>
            <Legend>Resale and transfers</Legend>
            <Text>Decide if people buy tickets from you or from scalpers.</Text>
            <RadioGroup name="resale" defaultValue="permit">
                <RadioField>
                    <Radio value="permit"/>
                    <Label>Allow tickets to be resold</Label>
                    <Description>Customers can resell or transfer their tickets if they can’t make it to the
                        event.</Description>
                </RadioField>
                <RadioField>
                    <Radio value="forbid"/>
                    <Label>Don’t allow tickets to be resold</Label>
                    <Description>Tickets cannot be resold or transferred to another person.</Description>
                </RadioField>
            </RadioGroup>
        </Fieldset>
    )
}

export const Controlled: Story = {
    args: {
        value: "permit",
    },
    render: ({value}) => {
        const [selected, setSelected] = useState(value)

        return (
            <RadioGroup value={selected} onChange={setSelected}>
                <RadioField>
                    <Radio value="permit"/>
                    <Label>Allow tickets to be resold</Label>
                </RadioField>
                <RadioField>
                    <Radio value="forbid"/>
                    <Label>Don’t allow tickets to be resold</Label>
                </RadioField>
            </RadioGroup>
        )
    }
}

export const AllColors: Story = {
    args: {
        value: "1",
    },
    render: ({value}) => {
        return (
            <div className="grid grid-cols-4 gap-4">
                {Object.entries(colors).map(([key, value]) => (
                    <RadioGroup key={key} defaultValue={key}>
                        <Radio value={key} color={key as keyof typeof colors}>
                            {key}
                        </Radio>
                    </RadioGroup>
                ))}
            </div>
        )

    }
}

export const WithCustomLayout: Story = {
    args: {
        value: "1",
    },
    render: ({value}) => (
        <HeadlessFieldset>
            <HeadlessLegend className="text-base/6 font-medium sm:text-sm/6">
                How would you rate your experience?
            </HeadlessLegend>
            <HeadlessRadioGroup name="rating" defaultValue={value} className="mt-4 flex gap-6 sm:gap-8">
                {["1", "2", "3", "4", "5"].map((rating) => (
                    <HeadlessField key={rating} className="flex items-center gap-2">
                        <Radio value={rating}/>
                        <HeadlessLabel className="select-none text-base/6 sm:text-sm/6">{rating}</HeadlessLabel>
                    </HeadlessField>
                ))}
            </HeadlessRadioGroup>
        </HeadlessFieldset>
    )
}

export {WithLabel, WithLabelAndDescription};
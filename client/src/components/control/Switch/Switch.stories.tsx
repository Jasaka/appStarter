import type {Meta, StoryObj} from '@storybook/react';
import {colors, Switch, SwitchField, SwitchGroup} from './Switch';
import {Description, Label} from "@/components/form/Fieldset/Fieldset";
import {Field as HeadlessField} from '@headlessui/react'

const meta = {
    title: 'Components/Control/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithDescriptionAndLabel: Story = {
    render: () => (
        <SwitchField>
            <Label>A Label</Label>
            <Description>A description</Description>
            <Switch name="switch" value={"A Value"}/>
        </SwitchField>
    )
}

export const CustomLayout: Story = {
    render: () => (
        <HeadlessField className="flex items-center gap-4">
            <Switch name="allow_embedding"/>
            <Label className={"min-w-fit font-medium"}>Allow embedding</Label>
        </HeadlessField>
    )
}

export const GroupOfSwitches: Story = {
    render: () => (
        <SwitchGroup>
        <SwitchField>
            <Label>First Label</Label>
            <Switch name="switchA" value={"A Value"}/>
        </SwitchField>
        <SwitchField>
            <Label>Second Label</Label>
            <Description>A description with a twist</Description>
            <Switch name="switchB" value={"B Value"}/>
        </SwitchField>
        <SwitchField>
            <Label>Third Label</Label>
            <Description>A description with another twist</Description>
            <Switch name="switchC" value={"C Value"}/>
        </SwitchField>
        </SwitchGroup>
    )
}

export const AllColors: Story = {
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates all the available colors for the `Switch` component.',
            },
        },
    },
    render: () => (
        <div className="grid grid-cols-4 gap-4">
            {Object.entries(colors).map(([key, value]) => (
                <Switch key={key} color={key as keyof typeof colors} defaultChecked/>
            ))}
        </div>
    )
}
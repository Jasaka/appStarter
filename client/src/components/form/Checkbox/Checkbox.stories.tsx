import type {Meta, StoryObj} from '@storybook/react';
import {Checkbox, CheckboxField, CheckboxGroup} from './Checkbox';
import {Description, Label} from "@/components/form/Fieldset/Fieldset";

const meta = {
    title: 'Components/Form/Checkbox',
    component: Checkbox,
    // @ts-ignore
    subcomponents: {CheckboxField, CheckboxGroup},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: "sky",
        defaultChecked: true,
        name: "checkbox_name"
    },
    render: ({color, defaultChecked, name}) => (
        <Checkbox name={name} defaultChecked={defaultChecked} color={color}/>
    ),
};

const WithLabel: Story = {
    args: {
        color: "sky",
        defaultChecked: true,
        name: "checkbox_name"
    },
    render: ({color, defaultChecked, name}) => (
        <CheckboxField>
            <Checkbox name={name} defaultChecked={defaultChecked} color={color}/>
            <Label>Here be Label</Label>
        </CheckboxField>
    ),
};

const WithLabelAndDescription: Story = {
    args: {
        color: "sky",
        defaultChecked: true,
        name: "checkbox_name"
    },
    render: ({color, defaultChecked, name}) => (
        <CheckboxField>
            <Checkbox name={name} defaultChecked={defaultChecked} color={color}/>
            <Label>Here be Label</Label>
            <Description>Description of Checkbox.</Description>
        </CheckboxField>
    ),
};

const GroupOfCheckboxes: Story = {
    render: () => (
        <CheckboxGroup>
            <CheckboxField>
                <Checkbox name="checkbox_name_1" defaultChecked={true} color="sky"/>
                <Label>Here be Label 1</Label>
                <Description>Description of Checkbox 1.</Description>
            </CheckboxField>
            <CheckboxField>
                <Checkbox name="checkbox_name_2" defaultChecked={false} color="sky"/>
                <Label>Here be Label 2</Label>
                <Description>Description of Checkbox 2.</Description>
            </CheckboxField>
        </CheckboxGroup>
    )
}

export {WithLabel, WithLabelAndDescription, GroupOfCheckboxes};
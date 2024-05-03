import type {Meta, StoryObj} from '@storybook/react';
import {
    Dropdown,
    DropdownButton,
    DropdownDescription,
    DropdownItem,
    DropdownMenu,
    DropdownHeader,
    DropdownLabel,
    DropdownHeading,
    DropdownSection,
    DropdownSeparator,
    DropdownShortcut
} from './Dropdown';

const meta = {
    title: 'Components/Control/Dropdown',
    component: Dropdown,
    // @ts-ignore
    subcomponents: {DropdownButton, DropdownItem, DropdownMenu, DropdownDescription, DropdownHeader, DropdownLabel, DropdownHeading, DropdownSection, DropdownSeparator, DropdownShortcut},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Dropdown>
            <DropdownButton>Dropdown</DropdownButton>
            <DropdownMenu>
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem>Item 3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    ),
};

export const WithHeader: Story = {
    render: () => (
        <Dropdown>
            <DropdownButton>Dropdown</DropdownButton>
            <DropdownMenu>
                <DropdownHeader>Header</DropdownHeader>
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem>Item 3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    ),
};

export const WithDescriptions: Story = {
    render: () => (
        <Dropdown>
            <DropdownButton>Dropdown</DropdownButton>
            <DropdownMenu>
                <DropdownItem>
                    <DropdownLabel>Item 1</DropdownLabel>
                    <DropdownDescription>Description 1</DropdownDescription>
                </DropdownItem>
                <DropdownItem>
                    <DropdownLabel>Item 2</DropdownLabel>
                    <DropdownDescription>Description 2</DropdownDescription>
                </DropdownItem>
                <DropdownItem>
                    <DropdownLabel>Item 3</DropdownLabel>
                    <DropdownDescription>Description 3</DropdownDescription>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    ),
}

export const WithSections: Story = {
    render: () => (
        <Dropdown>
            <DropdownButton>Dropdown</DropdownButton>
            <DropdownMenu>
                <DropdownSection>
                    <DropdownHeading>Section 1</DropdownHeading>
                    <DropdownItem>Item 1</DropdownItem>
                    <DropdownItem>Item 2</DropdownItem>
                    <DropdownItem>Item 3</DropdownItem>
                </DropdownSection>
                <DropdownSeparator/>
                <DropdownSection>
                    <DropdownHeading>Section 2</DropdownHeading>
                    <DropdownItem>Item 4</DropdownItem>
                    <DropdownItem>Item 5</DropdownItem>
                    <DropdownItem>Item 6</DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    ),
}

export const WithShortcuts: Story = {
    render: () => (
        <Dropdown>
            <DropdownButton>Dropdown</DropdownButton>
            <DropdownMenu>
                <DropdownItem>
                    <DropdownLabel>Item 1</DropdownLabel>
                    <DropdownShortcut keys={"Cmd+1"} />
                </DropdownItem>
                <DropdownItem>
                    <DropdownLabel>Item 2</DropdownLabel>
                    <DropdownShortcut keys={"Cmd+2"} />
                </DropdownItem>
                <DropdownItem>
                    <DropdownLabel>Item 3</DropdownLabel>
                    <DropdownShortcut keys={"Cmd+3"} />
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    ),
}


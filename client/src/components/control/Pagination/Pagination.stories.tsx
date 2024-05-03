import type {Meta, StoryObj} from '@storybook/react';
import {
    Pagination,
    PaginationGap,
    PaginationList,
    PaginationNext,
    PaginationPage,
    PaginationPrevious
} from './Pagination';

const meta = {
    title: 'Components/Control/Pagination',
    component: Pagination,
    // @ts-ignore
    subcomponents: {PaginationGap, PaginationList, PaginationNext, PaginationPage, PaginationPrevious},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Pagination>
            <PaginationPrevious href={"#"}>Previous</PaginationPrevious>
            <PaginationList>
                <PaginationPage href={"?page=1"}>1</PaginationPage>
                <PaginationPage href={"?page=2"}>2</PaginationPage>
                <PaginationPage href={"?page=3"}>3</PaginationPage>
                <PaginationGap/>
                <PaginationPage href={"?page=10"}>10</PaginationPage>
            </PaginationList>
            <PaginationNext href={"#"}>Next</PaginationNext>
        </Pagination>
    ),
};

export const Active: Story = {
render: () => (
        <Pagination>
            <PaginationPrevious href={"#"} />
            <PaginationList>
                <PaginationPage href={"?page=1"}>1</PaginationPage>
                <PaginationGap/>
                <PaginationPage href={"?page=8"}>8</PaginationPage>
                <PaginationPage href={"?page=9"}>9</PaginationPage>
                <PaginationPage href={"?page=10"} current>10</PaginationPage>
            </PaginationList>
            <PaginationNext />
        </Pagination>
    ),
};

export const WithoutPageLinks: Story = {
    render: () => (
        <Pagination>
            <PaginationPrevious>Backward</PaginationPrevious>
            <PaginationNext href={"#"}>Forward</PaginationNext>
        </Pagination>
    ),
}

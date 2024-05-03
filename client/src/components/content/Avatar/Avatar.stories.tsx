import type {Meta, StoryObj} from '@storybook/react';
import {Avatar, AvatarGroup} from './Avatar';

const meta = {
    title: 'Components/Content/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: "10",
        src: "https://i.pravatar.cc/150?img=51",
        initials: "JS",
        square: false,
    },
    render: ({size, src, initials, square}) => {
        return (
            <Avatar size={size} src={src} square={square} initials={initials}/>
        );
    },
};

export const Initials: Story = {
    render: ({}) => {
        return (
            <div className="flex items-center justify-center space-x-4">
                <Avatar size="6" initials={"JS"}/>
                <Avatar size="8" initials={"AB"}/>
                <Avatar size="10" initials={"TJ"}/>
                <Avatar size="16" initials={"KS"}/>
            </div>
        );
    },
};

export const Square: Story = {
    render: ({}) => {
        return (
            <div className="flex items-center justify-center space-x-4">
                <Avatar size="6" src={"https://i.pravatar.cc/150?img=51"} square={true}/>
                <Avatar size="8" src={"https://i.pravatar.cc/150?img=51"} square={true}/>
                <Avatar size="10" src={"https://i.pravatar.cc/150?img=51"} square={true}/>
                <Avatar size="16" src={"https://i.pravatar.cc/150?img=51"} square={true}/>
            </div>
        );
    },
};

export const GroupedAvatars: Story = {
    render: ({}) =>
        <AvatarGroup
            size={"8"}
            avatarData={[
                {src: "https://i.pravatar.cc/150?img=51", initials: "JS"},
                {src: "https://i.pravatar.cc/150?img=52"},
                {src: "https://i.pravatar.cc/150?img=53"},
                {src: "https://i.pravatar.cc/150?img=54"},
                {src: "https://i.pravatar.cc/150?img=55"},
            ]}
        />
}




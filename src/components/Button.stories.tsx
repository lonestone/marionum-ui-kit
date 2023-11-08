import type {Meta, StoryObj} from '@storybook/react';

import {Button} from './Button.tsx';
import {Flex} from "@chakra-ui/react";
import {FileQuestionIcon} from "./FileQuestionIcon.tsx";
import {SuspensionPointsIcon} from './SuspensionPointsIcon.tsx';
import {CrossIcon} from "./CrossIcon.tsx";
import {DropDownIcon} from "./DropDownIcon.tsx";
import {DropRightIcon} from "./DropRightIcon.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Marionum/Components/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    render: () => (<Flex gap="16px">
        <Button variant="primary">Primary regular</Button>
        <Button id="hover" variant="primary">Primary Hover</Button>
        <Button id="selected" variant="primary">Primary selected</Button>
        <Button variant="primary" disabled>Primary disabled</Button>
    </Flex>),
    parameters: {
        pseudo: {
            hover: ['#hover'],
            focus: ['#selected'],
            rootSelector: 'body'
        }
    }
};

export const Secondary: Story = {
    render: () => (<Flex gap="16px">
        <Button variant="secondary" leftIcon={<FileQuestionIcon/>}>Secondary regular</Button>
        <Button id="hover" variant="secondary" leftIcon={<FileQuestionIcon/>}>Secondary Hover</Button>
        <Button id="selected" variant="secondary" leftIcon={<FileQuestionIcon/>}>Secondary selected</Button>
        <Button variant="secondary" leftIcon={<FileQuestionIcon/>} disabled>Secondary disabled</Button>
    </Flex>),
    parameters: {
        pseudo: {
            hover: ['#hover'],
            focus: ['#selected'],
            rootSelector: 'body'
        }
    }
};

export const Tertiary: Story = {
    render: () => (<Flex gap="16px">
        <Button variant="tertiary" rightIcon={<DropDownIcon/>}>Tertiary regular</Button>
        <Button id="hover" variant="tertiary" rightIcon={<DropDownIcon/>}>Tertiary Hover</Button>
        <Button id="selected" variant="tertiary" rightIcon={<DropDownIcon/>}>Tertiary selected</Button>
        <Button variant="tertiary" rightIcon={<DropDownIcon/>} disabled>Tertiary disabled</Button>
    </Flex>),
    parameters: {
        pseudo: {
            hover: ['#hover'],
            focus: ['#selected'],
            rootSelector: 'body'
        }
    }
};
export const Icon: Story = {
    render: () => (<Flex gap="16px">
        <Button variant="icon"><SuspensionPointsIcon width={18} height={18}/></Button>
        <Button id="hover" variant="icon"><SuspensionPointsIcon width={18} height={18}/></Button>
        <Button id="selected" variant="icon"><SuspensionPointsIcon width={18} height={18}/></Button>
        <Button variant="icon" disabled><SuspensionPointsIcon width={18} height={18}/></Button>
    </Flex>),
    parameters: {
        pseudo: {
            hover: ['#hover'],
            focus: ['#selected'],
            rootSelector: 'body'
        }
    }
};

export const Link: Story = {
    render: () => (<Flex gap="16px">
        <Button variant="link" rightIcon={<DropRightIcon/>}>Link regular</Button>
        <Button id="hover" variant="link" rightIcon={<DropRightIcon/>}>Link Hover</Button>
        <Button id="selected" variant="link" rightIcon={<DropRightIcon/>}>Link selected</Button>
        <Button variant="link" rightIcon={<DropRightIcon/>} disabled>Link disabled</Button>
    </Flex>),
    parameters: {
        pseudo: {
            hover: ['#hover'],
            focus: ['#selected'],
            rootSelector: 'body'
        }
    }
};

export const Warning: Story = {
    render: () => (<Flex gap="16px">
        <Button variant="warning" leftIcon={<CrossIcon/>}>Link regular</Button>
        <Button id="hover" variant="warning" leftIcon={<CrossIcon/>}>Link Hover</Button>
        <Button id="selected" variant="warning" leftIcon={<CrossIcon/>}>Link selected</Button>
        <Button variant="warning" leftIcon={<CrossIcon/>} disabled>Link disabled</Button>
    </Flex>),
    parameters: {
        pseudo: {
            hover: ['#hover'],
            focus: ['#selected'],
            rootSelector: 'body'
        }
    }
};
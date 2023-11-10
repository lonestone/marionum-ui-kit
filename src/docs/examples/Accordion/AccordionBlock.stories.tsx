/* eslint-disable react-hooks/rules-of-hooks */
import type {Meta, StoryObj} from '@storybook/react';

import {AccordionBlock} from "./AccordionBlock.tsx";

const meta = {
    title: 'MarioNUM/Examples/Stories/Accordion',
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {language: 'tsx'}
        }
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<{ tabIndex: number }>;

export const Accordion: Story = {
    render: () => {
        return <AccordionBlock/>
    },
};

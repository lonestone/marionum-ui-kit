import type {Meta, StoryObj} from '@storybook/react';

import {RecurrenceModalExample} from './RecurrenceModalExample.tsx';
import {Box, useDisclosure, UseModalProps} from "@chakra-ui/react";
import {Button} from "marionum-ui-kit";

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: RecurrenceModalExample,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta

export default meta;
type Story = StoryObj<UseModalProps>;

export const RecurrenceModalExampleStory: Story = {
    render: () => {
        const {isOpen: isRecurrenceModalOpen, onOpen: onRecurrenceModalOpen, onClose: onRecurrenceModalClose} = useDisclosure()

        return <Box p={8}>
            <Button onClick={onRecurrenceModalOpen}>Open recurrence modale</Button>
            <RecurrenceModalExample isOpen={isRecurrenceModalOpen} onClose={onRecurrenceModalClose}/>
        </Box>
    },
    args: {}
};

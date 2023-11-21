import type {Meta, StoryObj} from '@storybook/react';

import {AddUserModalExample} from './AddUserModalExample.tsx';
import {Box, useDisclosure, UseModalProps} from "@chakra-ui/react";
import {Button} from "marionum-ui-kit";

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: AddUserModalExample,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta

export default meta;
type Story = StoryObj<UseModalProps>;

export const AddUserModalExampleStory: Story = {
    render: () => {
        const {isOpen: isAddUserModalOpen, onOpen: onAddUserModalOpen, onClose: onAddUserModalClose} = useDisclosure()

        return <Box p={8}>
            <Button onClick={onAddUserModalOpen}>Ouvrir la modale</Button>
            <AddUserModalExample isOpen={isAddUserModalOpen} onClose={onAddUserModalClose}/>
        </Box>
    },
    args: {}
};

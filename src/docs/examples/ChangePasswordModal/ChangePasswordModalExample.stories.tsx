import type {Meta, StoryObj} from '@storybook/react';

import {ChangePasswordModalExample} from './ChangePasswordModalExample.tsx';
import {Box, useDisclosure, UseModalProps} from "@chakra-ui/react";
import {Button} from "marionum-ui-kit";

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: ChangePasswordModalExample,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta

export default meta;
type Story = StoryObj<UseModalProps>;

export const ChangePasswordModalExampleStory: Story = {
    render: () => {
        const {isOpen: isChangePasswordModalOpen, onOpen: onChangePasswordModalOpen, onClose: onChangePasswordModalClose} = useDisclosure()

        return <Box p={8}>
            <Button onClick={onChangePasswordModalOpen}>Ouvrir la modale</Button>
            <ChangePasswordModalExample isOpen={isChangePasswordModalOpen} onClose={onChangePasswordModalClose}/>
        </Box>
    },
    args: {}
};

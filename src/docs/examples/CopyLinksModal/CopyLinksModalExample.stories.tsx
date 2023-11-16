import type {Meta, StoryObj} from '@storybook/react';

import {CopyLinksModalExample, CopyLinksModalProps} from './CopyLinksModalExample.tsx';
import {Box, useDisclosure} from "@chakra-ui/react";
import {Button} from "marionum-ui-kit";

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: CopyLinksModalExample,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta

export default meta;
type Story = StoryObj<CopyLinksModalProps>;

export const CopyLinksModalExampleStory: Story = {
    render: ({studentLink, teacherLink, isBookingConfirmed}) => {
        const {isOpen: isCopyLinksModalOpen, onOpen: onCopyLinksModalOpen, onClose: onCopyLinksModalClose} = useDisclosure()

        return <Box p={8}>
            <Button onClick={onCopyLinksModalOpen}>Open CopyLinks modale</Button>
            <CopyLinksModalExample isOpen={isCopyLinksModalOpen} onClose={onCopyLinksModalClose}
                                   studentLink={studentLink} teacherLink={teacherLink}
                                   isBookingConfirmed={isBookingConfirmed}/>
        </Box>
    },
    args: {
        studentLink: "https://studentLink",
        teacherLink: "https://teacherLink",
        isBookingConfirmed: false,
    }
};

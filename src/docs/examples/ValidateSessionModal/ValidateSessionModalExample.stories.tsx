/* eslint-disable react-hooks/rules-of-hooks */
import type {Meta, StoryObj} from '@storybook/react';

import {ValidateSessionModalExample, ValidateSessionModalProps} from './ValidateSessionModalExample.tsx';
import {HStack, useDisclosure} from "@chakra-ui/react";
import {Button} from "marionum-ui-kit";
import {useState} from "react";

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: ValidateSessionModalExample,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta

export default meta;
type Story = StoryObj<ValidateSessionModalProps>;

export const ValidateSessionModalExampleStory: Story = {
    render: ({studentLink, teacherLink}) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isValidated, setValidated] = useState<boolean>(true)
        const {isOpen: isValidateSessionModalOpen, onOpen: onValidateSessionModalOpen, onClose: onValidateSessionModalClose} = useDisclosure()

        function handleValidate(isOk: boolean) {
            if (isOk != isValidated) setValidated(isOk);
            onValidateSessionModalOpen()
        }

        return <HStack p={8} gap="32px">
            <Button onClick={() => handleValidate(true)}>Ouvrir la modale de validation de session (isBookingConfirmed)</Button>
            <Button onClick={() => handleValidate(false)}>Ouvrir la modale de validation de session (non confirmé)</Button>
            <ValidateSessionModalExample isOpen={isValidateSessionModalOpen} onClose={onValidateSessionModalClose}
                                         studentLink={studentLink} teacherLink={teacherLink}
                                         isBookingConfirmed={isValidated}/>
        </HStack>
    },
    args: {
        studentLink: "https://studentLink",
        teacherLink: "https://teacherLink"
    }
};

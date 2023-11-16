import {
    Alert,
    AlertIcon,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    UseModalProps,
} from "@chakra-ui/react";
import {LinkCard} from "marionum-ui-kit";


export interface ValidateSessionModalProps extends UseModalProps {
    studentLink: string
    teacherLink: string
    isBookingConfirmed?: boolean
}

export const ValidateSessionModalExample = ({isOpen, onClose, studentLink, teacherLink, isBookingConfirmed, ...props}: ValidateSessionModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" {...props}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Copier le lien de la séance</ModalHeader>
                <ModalCloseButton/>
                <ModalBody paddingY="16px">
                    {isBookingConfirmed && <Stack gap="16px">
                        <Alert variant='solid' status='success'
                               borderRadius="4px" fontWeight="semibold" fontSize="md" paddingY="16px">
                            <AlertIcon/> Réservation confirmée
                        </Alert>
                        <LinkCard label="Lien d'accès étudiant" link={studentLink}/>
                        <LinkCard label="Lien d'accès enseignant" link={teacherLink}/>
                    </Stack>}
                    {!isBookingConfirmed && <Stack gap="16px">
                        <Alert variant='solid' status='error'
                               borderRadius="4px" fontWeight="semibold" fontSize="md" paddingY="16px">
                            <HStack alignItems="start"><AlertIcon/>
                                <Stack>
                                    <span>Réservation impossible</span>
                                    <Text fontSize="md" fontWeight="normal">
                                        Il n’est pas possible de valider votre séance de TP, votre établissement à
                                        atteint
                                        la limite de poste de son abonnement pour ce créneau.
                                    </Text>
                                </Stack>
                            </HStack>
                        </Alert>
                    </Stack>}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

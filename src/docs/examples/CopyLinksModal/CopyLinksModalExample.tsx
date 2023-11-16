import {
    Alert,
    AlertIcon,
    Box,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    UseModalProps,
} from "@chakra-ui/react";
import {LinkCard} from "../../../components/LinkCard/LinkCard.tsx";


export interface CopyLinksModalProps extends UseModalProps {
    studentLink: string
    teacherLink: string
    isBookingConfirmed?: boolean
}


export const CopyLinksModalExample = ({isOpen, onClose, studentLink, teacherLink, isBookingConfirmed, ...props}: CopyLinksModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" {...props}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Copier le lien de la séance</ModalHeader>
                {isBookingConfirmed && <Box paddingX="24px" marginTop="16px">
                    <Alert variant='solid' status='success'
                           borderRadius="4px" fontWeight="semibold" fontSize="md" paddingY="16px">
                        <AlertIcon/> Réservation confirmée
                    </Alert>
                </Box>}
                <ModalCloseButton/>
                <ModalBody paddingY="16px">
                    <Stack gap="16px">
                        <LinkCard label="Lien d'accès étudiant" link={studentLink}/>
                        <LinkCard label="Lien d'accès enseignant" link={teacherLink}/>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

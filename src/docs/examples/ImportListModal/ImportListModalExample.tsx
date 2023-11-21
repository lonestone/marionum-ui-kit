import {Button} from "marionum-ui-kit";
import {
    Alert,
    AlertIcon,
    Checkbox,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Spacer,
    Stack,
    Text,
    useBoolean,
    UseModalProps
} from "@chakra-ui/react";

export const ImportListModalExample = ({isOpen, onClose, ...props}: UseModalProps) => {
    const [allowReplace, setAllowReplace] = useBoolean(false);

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" {...props}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Import de liste</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Alert status="info" width="100%" variant="solid" borderRadius="6px" position="relative"
                           bgColor="Marionum.700">
                        <HStack alignItems="start">
                            <AlertIcon/>
                            <Stack alignItems="start">
                                <Text as="div" fontWeight="bold">Comment bien importer ma liste ?</Text>
                                <Text as="div">
                                    Afin de bien importer votre liste d’utilisateurs, votre fichier doit : Être
                                    au format .csv la ligne d’un utilisateur doit être séparée par des “;”
                                    prénom;nom;droit
                                </Text>
                            </Stack>
                        </HStack>
                    </Alert>
                    <Checkbox id="replace" marginY="16px" isChecked={allowReplace}
                              onChange={setAllowReplace.toggle}>
                        <Text as="span" fontSize="sm">Importer en remplaçant l'existant</Text>
                    </Checkbox>
                    {allowReplace && <Alert status="error" width="100%" borderRadius="6px" position="relative">
                        <HStack alignItems="start">
                            <AlertIcon/>
                            <Text as="div">Attention, cette action est irrévocable</Text>
                        </HStack>
                    </Alert>}
                    <HStack gap="12px" marginY="16px">
                        <Spacer/>
                        <Button onClick={onClose} variant="tertiary" fontSize="md">Annuler</Button>
                        <Button variant="primary" fontSize="md">Sélectionner mon fichier</Button>
                    </HStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

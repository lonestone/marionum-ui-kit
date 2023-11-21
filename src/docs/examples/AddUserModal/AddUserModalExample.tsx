import {Button, Label} from "marionum-ui-kit";
import {
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
    Select,
    Spacer,
    Stack,
    UseModalProps
} from "@chakra-ui/react";
import {CiSearch} from "react-icons/ci";

export const AddUserModalExample = ({isOpen, onClose, ...props}: UseModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" {...props}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Ajout d'utilisatrice ou d'utilisateur</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Label htmlFor="email" label="Email" marginTop="0px">
                        <InputGroup width="486px">
                            <InputLeftElement>
                                <Icon as={CiSearch} boxSize="1rem" color="black"/>
                            </InputLeftElement>
                            <Input name="email" placeholder='Rechercher un utilisateur par son email'
                                   variant="outline" size="md" bgColor="white"/>
                        </InputGroup>
                    </Label>
                    <HStack>
                        <Label htmlFor="userName" label="Nom">
                            <Input name="userName" placeholder='Nom' variant="outline" size="md" bgColor="white"/>
                        </Label>
                        <Label htmlFor="userSurname" label="Prénom">
                            <Input name="userSurname" placeholder='Prénom' variant="outline" size="md" bgColor="white"/>

                        </Label>
                    </HStack>
                    <Label htmlFor="institution" label="Établissement">
                        <Select name="institution" placeholder='Établissement' variant="outline" size="md"
                                bgColor="white">
                            <option value="e1">Établissement 1</option>
                            <option value="e2">Établissement 2</option>
                        </Select>
                    </Label>
                    <Label htmlFor="permissionLevel" label="Niveau de permission">
                        <RadioGroup name="permissionLevel" placeholder='Niveau de permission' variant="outline"
                                    size="md" bgColor="white">
                            <Stack>
                                <Radio value="0">Préparateur</Radio>
                                <Radio value="1">Organisateur</Radio>
                                <Radio value="2">Animateur</Radio>
                                <Radio value="3">Administrateur</Radio>
                            </Stack>
                        </RadioGroup>
                    </Label>
                    <HStack gap="12px" marginY="16px">
                        <Spacer/>
                        <Button onClick={onClose} variant="tertiary" fontSize="md">Annuler</Button>
                        <Button variant="primary" fontSize="md">Changer</Button>
                    </HStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

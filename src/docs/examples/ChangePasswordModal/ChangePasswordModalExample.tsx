import {Button, Label} from "marionum-ui-kit";
import {
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Spacer,
    UseModalProps
} from "@chakra-ui/react";
import {LuEye, LuEyeOff} from "react-icons/lu";
import {useState} from "react";

export const ChangePasswordModalExample = ({isOpen, onClose, ...props}: UseModalProps) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" {...props}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Changer mon mot de passe</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Label htmlFor="previousPassword" label="Ancien mot de passe" marginTop="0px">
                        <Input id="previousPassword" type="password"/>
                    </Label>
                    <Label htmlFor="nextPassword" label="Nouveau mot de passe">
                        <InputGroup>
                            <Input
                                id="nextPassword"
                                pr='2.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Mot de passe'
                            />
                            <InputRightElement width='2.5rem'>
                                <Button variant="unstyled" h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <LuEyeOff style={{margin: '0 auto'}}/> : <LuEye  style={{margin: '0 auto'}}/>}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Label>
                    <Label htmlFor="nextPasswordConfirm" label="Confirmer">
                        <InputGroup>
                            <Input
                                id="nextPasswordConfirm"
                                pr='2.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Mot de passe'
                            />
                            <InputRightElement width='2.5rem'>
                                <Button variant="unstyled" h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <LuEyeOff style={{margin: '0 auto'}}/> : <LuEye  style={{margin: '0 auto'}}/>}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
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

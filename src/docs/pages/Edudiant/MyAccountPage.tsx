import {Block, Button} from "marionum-ui-kit";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    Avatar,
    Box,
    Circle,
    Heading,
    HStack,
    Stack,
    Text,
    useDisclosure,
    VisuallyHidden,
    VStack
} from "@chakra-ui/react";
import {ArrowBackIcon, EditIcon, ExternalLinkIcon} from "@chakra-ui/icons";
import {ChangePasswordModalExample} from "../../examples/ChangePasswordModal/ChangePasswordModalExample.tsx";

export const MyAccountPage: React.FC = () => {
    const {
        isOpen: isChangePasswordModalOpen,
        onOpen: onChangePasswordModalOpen,
        onClose: onChangePasswordModalClose
    } = useDisclosure()

    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <Block backgroundColor="white" paddingY="24px">
                <VStack align="start">
                    <Button variant="lien" leftIcon={<ArrowBackIcon boxSize="4"/>}
                            pl={0} size="xs" color="Marionum.900">Retour</Button>
                    <HStack align="center" gap="16px" flexWrap="wrap">
                        <Heading as="h2" fontSize="3xl" whiteSpace="nowrap">Mon compte</Heading>
                    </HStack>
                </VStack>
            </Block>
            <Block backgroundColor="Marionum.50" paddingY="44px" isContent>
                <Stack gap="16px">
                    <Box borderRadius="8px" bgColor="white" p="32px">
                        <HStack gap="24px">
                            <Avatar w="72px" h="72px" src='https://bit.ly/sage-adebayo'/>
                            <Stack gap="0px">
                                <Heading as="h3" fontSize="md" fontWeight="bold">Samir Around</Heading>
                                <Text as="span" fontSize="md" fontWeight="normal">Université Sorbonne Paris Nord</Text>
                                <Text as="span" fontSize="sm" fontWeight="normal">Master EID2</Text>
                            </Stack>
                        </HStack>
                    </Box>
                    <Box borderRadius="8px" bgColor="white" p="32px">
                        <Stack gap="8px">
                            <Heading as="h3" fontSize="lg" fontWeight="bold" mb="8px">
                                Informations personnelles
                            </Heading>
                            <Text as="span" fontWeight="semibold" color="gray.500">Adresse e-mail</Text>
                            <Text as="span">samir.aroun@univ-sorbonne.fr</Text>
                        </Stack>
                    </Box>
                    <Box borderRadius="8px" bgColor="white" p="32px">
                        <Heading as="h3" fontSize="lg" fontWeight="bold" mb="8px">
                            Mot de passe
                        </Heading>
                        <HStack gap="4px">
                            <Circle size="8px" bgColor="Marionum.300"/>
                            <Circle size="8px" bgColor="Marionum.300"/>
                            <Circle size="8px" bgColor="Marionum.300"/>
                            <Circle size="8px" bgColor="Marionum.300"/>
                            <Circle size="8px" bgColor="Marionum.300"/>
                            <Circle size="8px" bgColor="Marionum.300"/>
                            <Circle size="8px" bgColor="Marionum.300" mr="8px"/>
                            <Button onClick={onChangePasswordModalOpen}
                                    variant="secondary" minW="32px" w="32px" h="32px" p="0px">
                                <EditIcon boxSize="16px"/>
                                <VisuallyHidden>Changer de mot de passe</VisuallyHidden>
                            </Button>
                            <ChangePasswordModalExample isOpen={isChangePasswordModalOpen}
                                                        onClose={onChangePasswordModalClose}/>
                        </HStack>
                    </Box>
                    <Box borderRadius="8px" bgColor="white" p="32px">
                        <Heading as="h3" fontSize="lg" fontWeight="bold" mb="8px">
                            Charte
                        </Heading>
                        <Button variant="tertiary" rightIcon={<ExternalLinkIcon/>}>Accéder à la charte</Button>
                    </Box>
                </Stack>
            </Block>
        </>
    );
};

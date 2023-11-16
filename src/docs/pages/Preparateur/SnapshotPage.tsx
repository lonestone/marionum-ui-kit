import {Block, Button, Comment, Packet, WithCalendar} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    Badge,
    Box,
    Checkbox,
    Flex,
    Heading,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spacer,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBoolean,
    useDisclosure,
    UseModalProps,
    VStack
} from "@chakra-ui/react";
import {ArrowBackIcon, LinkIcon} from '@chakra-ui/icons'
import {IoArchiveOutline, IoBugOutline, IoDuplicateOutline} from 'react-icons/io5'
import {MdDeleteOutline} from 'react-icons/md'
import {BiEditAlt} from 'react-icons/bi'
import {PiDotsThreeBold} from 'react-icons/pi'
import {FiShare2} from 'react-icons/fi'

const noop = () => {
};

const packetList = [{
    title: "Linux",
    version: "Ubuntu 18.0"
}, {
    title: "Java",
    version: "OpenJDK 1.16"
}, {
    title: "Node",
    version: "18.2.0"
}, {
    title: "Java",
    version: "OpenJDK 1.16"
}, {
    title: "Linux",
    version: "Ubuntu 18.0"
}, {
    title: "Node",
    version: "18.2.0"
}]

interface DiffuseConfirmModalProps extends UseModalProps {
    onDiffuse: (allowsMarionumSharing: boolean) => void
}

const DiffuseConfirmModal = ({onDiffuse, isOpen, onClose, ...props}: DiffuseConfirmModalProps) => {

    const [hasAllowedDiffusion, setAllowsDiffusion] = useBoolean(false);
    const handleDiffuse = () => {
        onDiffuse(hasAllowedDiffusion);
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" {...props}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Diffuser un snapshot</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Text as="span" fontSize="md">Souhaitez-vous diffuser ce snapshot au sein de votre établissement
                        ?</Text>
                    <Checkbox id="allowDiffusion" marginY="16px" isChecked={hasAllowedDiffusion}
                              onChange={setAllowsDiffusion.toggle}>
                        <Text as="span" fontSize="sm">Je permet à Marionum de diffuser ce snapshot à d’autres
                            établissement</Text>
                    </Checkbox>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={noop} variant="secondary" leftIcon={<LinkIcon/>} mr={3} fontSize="md">
                        Copier le lien
                    </Button>
                    <Spacer/>
                    <Button onClick={onClose} variant="tertiary" mr={3} fontSize="md">
                        Annuler
                    </Button>
                    <Button onClick={handleDiffuse} variant='primary'>Diffuser</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export const SnapshotPageContentExample = () => (<>
    {/* Description et tags */}
    <Text as="div" fontSize="md" marginTop="24px" width="891px">Lorem ipsum dolor sit amet consectetur. Tellus donec
        aliquet feugiat dictumst sed dapibus pretium euismod. In dignissim magna augue auctor non neque
        ultrices. Massa diam dictum dui vestibulum velit non eu vitae nulla. Scelerisque amet turpis
        malesuada dui id sed ornare ut. Risus vel dignissim pulvinar elit. Mi amet libero quam odio feugiat
        dictum urna.</Text>
    <Flex gap="8px" marginTop="13px">
        <Badge variant='outline'>BDD</Badge>
        <Badge variant='outline'>PHP</Badge>
        <Badge variant='outline'>C#</Badge> <Badge variant='outline'>BDD</Badge>
        <Badge variant='outline'>PHP</Badge>
        <Badge variant='outline'>C#</Badge>
    </Flex>

    {/* Applications et paquets */}
    <HStack marginTop="28px">
        <Heading fontSize="lg" as="h3">Principales applications et paquets installés</Heading>
        <Box w="1px" h="1.2rem" marginLeft="4px" bgColor="gray.300"/>
        <Button variant="lien" size="sm" color="black" p="4px">Voir tous les paquets</Button>
    </HStack>
    <Flex marginTop="22px" gap="16px" flexWrap="wrap">
        {packetList.map((p, i) => (
            <Packet key={i} title={p.title} version={p.version}
                    imageUrl="https://via.placeholder.com/116/D8DFFC"
                    width="384px"
            />
        ))}
    </Flex>

    {/* Diffusé à */}
    <HStack marginTop="60px" gap="1rem">
        <Heading fontSize="lg" as="h3">Diffusé à</Heading>
        <Badge variant="outline" fontSize="xs" p="7px 8px">Tout Marionum</Badge>
    </HStack>

    {/* Commentaires */}
    <Heading marginTop="40px" fontSize="lg" as="h3">Commentaires</Heading>
    <VStack marginTop="16px" align="start">
        <Comment
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim cursus
                            at ullamcorper mauris non. Integer aliquam, scelerisque."
            author="Nom de l'autrice ou auteur"
            date="12/2023"/>
        <Comment
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim cursus
                            at ullamcorper mauris non. Integer aliquam, scelerisque."
            author="Nom de l'autrice ou auteur"
            date="12/2023"/>
    </VStack>

    {/* Historique des modifications */}
    <Heading marginTop="40px" fontSize="lg" as="h3">Historique des modifications</Heading>
    <TableContainer width="600px" border="1px solid" borderColor="Marionum.200" borderRadius="6px"
                    marginTop="27px">
        <Table>
            <Thead>
                <Tr>
                    <Th>Date</Th>
                    <Th>Action</Th>
                    <Th textAlign="center">Utilisateur</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td><WithCalendar>10/01/2024</WithCalendar></Td>
                    <Td>Suppression du paquet</Td>
                    <Td textAlign="center"><Badge variant='outline'>Prénom N.</Badge></Td>
                </Tr>
                <Tr>
                    <Td><WithCalendar>10/12/2023</WithCalendar></Td>
                    <Td>Ajout de 2 applications</Td>
                    <Td textAlign="center"><Badge variant='outline'>Prénom N.</Badge></Td>
                </Tr>
                <Tr>
                    <Td><WithCalendar>10/11/2023</WithCalendar></Td>
                    <Td>Création</Td>
                    <Td textAlign="center"><Badge variant='outline'>Prénom N.</Badge></Td>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
</>)

export const SnapshotPage: React.FC = () => {
    const {isOpen: isDiffuseModalOpen, onOpen: onDiffuseModalOpen, onClose: onDiffuseModalClose} = useDisclosure()

    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={1} handleTabsChange={noop}/>
            {/* Block pour background et largeur du contenu de la page */}
            <Block backgroundColor="white" paddingY="24px">
                {/* Titre, lien de retour et actions */}
                <Flex alignItems="center" gap="16px">
                    <VStack align="start">
                        <Button variant="lien" leftIcon={<ArrowBackIcon boxSize="4"/>}
                                pl={0} size="xs">Retourner à la liste</Button>
                        <HStack align="center" gap="16px" flexWrap="wrap">
                            <Heading fontSize="2xl" whiteSpace="nowrap">Nom du snapshot</Heading>
                            <Box w="1px" h="1rem" bgColor="gray.300"/>
                            <WithCalendar>12/2023</WithCalendar>
                            <Flex gap="8px">
                                <Badge variant='outline'>Prénom N.</Badge>
                                <Badge variant='solid'>Snapshot public</Badge>
                            </Flex>
                        </HStack>
                    </VStack>
                    <Spacer/>
                    <Button variant="tertiary" size="lg" leftIcon={<IoDuplicateOutline/>} flexShrink={0}>Dupliquer ce
                        snapshot</Button>
                    <Button onClick={onDiffuseModalOpen} variant="primary" size="lg"
                            leftIcon={<FiShare2/>}>Diffuser</Button>
                    <DiffuseConfirmModal isOpen={isDiffuseModalOpen} onClose={onDiffuseModalClose}
                                         onDiffuse={noop}/>
                    <Menu>
                        <MenuButton as={Button} aria-label='Options' variant="icon" size="lg">
                            <PiDotsThreeBold size="1.5rem" style={{margin: "0 auto"}}/>
                        </MenuButton>
                        <MenuList>
                            <MenuItem icon={<IoBugOutline size="1.5rem"/>}>Tester</MenuItem>
                            <MenuItem icon={<IoArchiveOutline size="1.5rem"/>}>Archiver</MenuItem>
                            <MenuItem icon={<BiEditAlt size="1.5rem"/>}>Modifier</MenuItem>
                            <MenuItem icon={<MdDeleteOutline size="1.5rem"/>}>Supprimer</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>

                <SnapshotPageContentExample />
            </Block>
        </>
    );
};

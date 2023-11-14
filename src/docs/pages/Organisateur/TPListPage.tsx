import {useState} from "react";
import {Block, Button, TitleBlock, WithCalendar} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Spacer,
    Tab,
    TabIndicator,
    Table,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tag,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
    UseModalProps, useToast,
    VStack
} from "@chakra-ui/react";
import {RiCheckboxCircleFill} from "react-icons/ri";
import {AddIcon, ArrowDownIcon, ArrowUpIcon} from "@chakra-ui/icons";
import {FaDesktop} from "react-icons/fa6";
import {LuUserCheck2} from "react-icons/lu";
import {PiDotsThreeBold} from "react-icons/pi";
import {BiEditAlt} from "react-icons/bi";
import {MdDeleteOutline} from "react-icons/md";
import {HiOutlineDocumentDuplicate} from "react-icons/hi2";
import {FiCopy} from "react-icons/fi";
import {HiOutlineDuplicate} from "react-icons/hi";


export interface TP {
    id: string,
    name: string,
    date: string,
    count: number,
    studentLink: string,
    teacherLink: string
}

export interface TPTableProps {
    tpList: TP[],
    sort: "asc" | "desc" | undefined
}

interface CopyLinksModalProps extends UseModalProps {
    studentLink: string
    teacherLink: string
}

const CopyLinksModal = ({isOpen, onClose, studentLink, teacherLink, ...props}: CopyLinksModalProps) => {
    const toast = useToast()

    function copyToClipboard(s: string) {
        navigator.clipboard.writeText(s);
        toast({
            title: 'Copié dans le presse-papier',
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" {...props}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Copier le lien de la séance</ModalHeader>
                <ModalCloseButton/>
                <ModalBody paddingY="16px">
                    <VStack borderRadius="8px" gap="8px" p="16px" border="1px solid" borderColor="Marionum.200"
                            bgColor="white" position="relative" alignItems="start">
                        <Text as="span" fontSize="lg" fontWeight="semibold">Lien d'accès étudiant</Text>
                        <Text as="a" href={studentLink} fontSize="sm" color="Marionum.700">{studentLink}</Text>
                        <Button onClick={() => copyToClipboard(studentLink)} variant="icon" position="absolute"
                                bottom="4px" right="4px" size="xs" w="24px" h="36px" p="0px">
                            <FiCopy size="18px"/>
                        </Button>
                    </VStack>
                    <VStack borderRadius="8px" gap="8px" p="16px" border="1px solid" borderColor="Marionum.200"
                            bgColor="white" position="relative" marginTop="16px" alignItems="start">
                        <Text as="span" fontSize="lg" fontWeight="semibold">Lien d'accès enseigant</Text>
                        <Text as="a" href={teacherLink} fontSize="sm" color="Marionum.700">{teacherLink}</Text>
                        <Button onClick={() => copyToClipboard(teacherLink)} variant="icon" position="absolute"
                                bottom="4px" right="4px" size="xs" w="24px" h="36px" p="0px">
                            <FiCopy size="18px"/>
                        </Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export const TPTable = ({tpList, sort}: TPTableProps) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [selectedTP, setSelectedTP] = useState<TP | null>(null)

    function handleOpenTp(tp: TP) {
        setSelectedTP(tp);
        onOpen()
    }

    const sortIndicator = sort === undefined
        ? <span></span>
        : sort === "asc" ? <ArrowUpIcon boxSize="1rem" ml="8px"/> : <ArrowDownIcon boxSize="1rem" ml="8px"/>;

    if (sort == "asc") {
        tpList.sort((a, b) => (a.date > b.date ? 1 : -1))
    } else if (sort == "desc") {
        tpList.sort((a, b) => (a.date > b.date ? -1 : 1))
    }

    return (<>
        <TableContainer border="1px solid" borderColor="Marionum.200" borderRadius="6px">
            <Table size="lg">
                <Thead>
                    <Tr>
                        <Th width="240px"><WithCalendar>Date {sortIndicator}</WithCalendar></Th>
                        <Th width="480px">
                            <HStack gap="8px">
                                <FaDesktop size="0.9rem"/>
                                <Text as="span">Nom de la séance</Text>
                            </HStack>
                        </Th>
                        <Th><HStack gap="8px">
                            <LuUserCheck2 size="1rem"/>
                            <Text as="span">Nombre d'étudiants</Text>
                        </HStack></Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tpList.map((tp) => (
                        <Tr key={tp.id}>
                            <Td>{tp.date}</Td>
                            <Td>{tp.name}</Td>
                            <Td><Tag variant='solid' colorScheme='teal'>{tp.count}</Tag></Td>
                            <Td>
                                <HStack gap="16px" justifyContent="end" paddingRight="16px">
                                    <Button onClick={() => handleOpenTp(tp)} variant="primary" size="sm"
                                            leftIcon={<HiOutlineDocumentDuplicate/>}>Copier le lien</Button>
                                    <Menu>
                                        <MenuButton as={Button} aria-label='Options' variant="icon" size="sm">
                                            <PiDotsThreeBold size="1.5rem" style={{margin: "0 auto"}}/>
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem icon={<BiEditAlt size="1.5rem"/>}>Modifier</MenuItem>
                                            <MenuItem icon={<HiOutlineDuplicate size="1.5rem"/>}>Dupliquer</MenuItem>
                                            <MenuItem icon={<MdDeleteOutline size="1.5rem"/>}>Supprimer</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </HStack>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
        <CopyLinksModal isOpen={isOpen} onClose={onClose}
                        studentLink={selectedTP?.studentLink ?? ""} teacherLink={selectedTP?.teacherLink ?? ""}/>
    </>)
}

export const TPListPage: React.FC = () => {
    const tpList: TP[] = [{
        id: "11111",
        name: "TP du 14 nov. UNIX",
        date: '14/11/2023',
        count: 32,
        studentLink: "https://.../id",
        teacherLink: "https://.../id/teacher?key=abcdef"
    }, {
        id: "22222",
        name: "TP du 15 nov. Python",
        date: '15/11/2023',
        count: 24,
        studentLink: "https://.../id2",
        teacherLink: "https://.../id2/teacher?key=abcdef"
    }]

    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={0} handleTabsChange={() => {
            }}/>
            <Block backgroundColor="Marionum.50">
                <Flex gap="12px" color="Marionum.700" paddingY="13px" justifyContent="center">
                    <RiCheckboxCircleFill size="1.3rem"/>
                    <Text as="span" fontSize="md" fontWeight="bold">Nom de l'établissement</Text>
                    <Spacer/>
                    <Button variant="tertiary" size="xs" height="1.5rem" borderColor="transparent" paddingX="8px">
                        Contacter mon admin
                    </Button>
                </Flex>
            </Block>
            <TitleBlock label="Travaux Pratiques" hideBottomBorder>
                <Spacer/>
                <Button variant="primary" size="lg" leftIcon={<AddIcon/>}>Organiser un TP</Button>
            </TitleBlock>
            {/**
             * Utiliser IsLazy pour charger à la demande les contenus des panels (https://chakra-ui.com/docs/components/tabs/usage#lazily-mounting-tab-panels)
             * Si tout est préchargé, isLazy peut être supprimé.
             **/}
            <Tabs variant="marionumNavigation" isLazy>
                <Block>
                    <TabList>
                        <Tab>Prochains TP</Tab>
                        <Tab>Anciens TP</Tab>
                        <Tab>TP Annulés</Tab>
                    </TabList>
                    <TabIndicator/>
                </Block>
                <Block backgroundColor="Marionum.50">
                    <TabPanels>
                        <TabPanel>
                            <TPTable sort="desc" tpList={tpList}/>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Block>
            </Tabs>
        </>
    )
};

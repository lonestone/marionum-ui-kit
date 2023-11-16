import {useState} from "react";
import {Block, Button, TitleBlock, WithCalendar} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    Box,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
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
import {HiOutlineDuplicate} from "react-icons/hi";
import {CopyLinksModalExample} from "../../examples/CopyLinksModal/CopyLinksModalExample.tsx";


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
                            <Td><Tag variant='solid' bgColor="#2BAAAF">{tp.count}</Tag></Td>
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
        <CopyLinksModalExample isOpen={isOpen} onClose={onClose}
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
        <VStack h="100%" gap="0px">
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
            <TitleBlock label="Travaux Pratiques">
                <Spacer/>
                <Button variant="primary" size="lg" leftIcon={<AddIcon/>}>Organiser un TP</Button>
            </TitleBlock>
            <Box w="100%" bg="Marionum.50" flexGrow={1}>
                {/**
                 * Utiliser IsLazy pour charger à la demande les contenus des panels (https://chakra-ui.com/docs/components/tabs/usage#lazily-mounting-tab-panels)
                 * Si tout est préchargé, isLazy peut être supprimé.
                 **/}
                <Tabs variant="marionumNavigation" isLazy>
                    <Block backgroundColor="white">
                        <TabList>
                            <Tab>Prochains TP</Tab>
                            <Tab>Anciens TP</Tab>
                            <Tab>TP Annulés</Tab>
                        </TabList>
                        <TabIndicator/>
                    </Block>
                    <Block hasTopBorder>
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
            </Box>
        </VStack>
    )
};

import {Button, WithCalendar} from "marionum-ui-kit";
import {
    Box, Flex,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Table,
    TableContainer,
    Tag,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";
import {useState} from "react";
import {ArrowDownIcon, ArrowUpIcon, ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {FaDesktop} from "react-icons/fa6";
import {LuUserCheck2} from "react-icons/lu";
import {PiDotsThreeBold} from "react-icons/pi";
import {BiEditAlt} from "react-icons/bi";
import {HiOutlineDuplicate} from "react-icons/hi";
import {MdDeleteOutline} from "react-icons/md";
import {CopyLinksModalExample} from "../CopyLinksModal/CopyLinksModalExample.tsx";
import {FiCopy} from "react-icons/fi";


export const tpListDataExample: TP[] = [{
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

export interface TP {
    id: string,
    name: string,
    date: string,
    count: number,
    studentLink: string,
    teacherLink: string
}

export interface TPListExampleProps {
    tpList: TP[],
    sort: "asc" | "desc" | undefined
}

export const TPListExample = ({tpList, sort}: TPListExampleProps) => {
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
                                            leftIcon={<FiCopy/>}>Copier le lien</Button>
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
        {/* Pagination */}
        <Flex justifyContent="end" p="12px 24px" bgColor="white" marginTop="8px"
              border="1px solid" borderColor="Marionum.200" borderRadius="6px">
            <HStack gap="8px">
                <Text as="span" fontSize="sm" color="gray.700">1-8</Text>
                <Text as="span" fontSize="sm" color="gray.500"> sur 32</Text>
                <Box w="16px"/>
                <Button variant="ghost" w="32px" h="32px" disabled><ChevronLeftIcon/></Button>
                <Button variant="ghost" w="32px" h="32px"><ChevronRightIcon/></Button>
            </HStack>
        </Flex>
        <CopyLinksModalExample isOpen={isOpen} onClose={onClose}
                               studentLink={selectedTP?.studentLink ?? ""} teacherLink={selectedTP?.teacherLink ?? ""}/>
    </>)
}

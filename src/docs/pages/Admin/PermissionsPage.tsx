import {Block, Button, TitleBlock} from "marionum-ui-kit";
import {NavigationAdminExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    Box,
    Center,
    Circle,
    Flex,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Select,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderProps,
    SliderThumb,
    SliderTrack,
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
    VisuallyHidden,
    VStack
} from "@chakra-ui/react";
import {ArrowDownIcon, ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {ChangeEventHandler, useState} from "react";
import {MdDelete} from "react-icons/md";
import {AddUserModalExample} from "../../examples/AddUserModal/AddUserModalExample.tsx";
import {ImportListModalExample} from "../../examples/ImportListModal/ImportListModalExample.tsx";

interface UserData {
    id: number;
    name: string;
    surname: string;
    email: string;
    status: string;
    roleLevel: 0 | 1 | 2 | 3 | undefined
}

const usersMockData: UserData[] = [
    {id: 0, name: "CHRISTOU", surname: "Julia", email: "juliachristou@mail.fr", status: "Enseignant", roleLevel: 3},
    {id: 1, name: "CHOI", surname: "Eun-Ji", email: "juliachristou@mail.fr", status: "Enseignant", roleLevel: 0},
    {id: 2, name: "COOPER", surname: "Bessie", email: "juliachristou@mail.fr", status: "Enseignant", roleLevel: 2},
    {id: 3, name: "BELL", surname: "Jérôme", email: "juliachristou@mail.fr", status: "Étudiant", roleLevel: undefined},
    {id: 4, name: "HENRY", surname: "Courtney", email: "juliachristou@mail.fr", status: "Enseignant", roleLevel: 3},
    {id: 5, name: "NGUYEN", surname: "Savannah", email: "juliachristou@mail.fr", status: "Enseignant", roleLevel: 2},
]

interface InstitutionData {
    id: number;
    name: string;
    size: string;
    subscription: string;
    roomsCount: number;
    stationsCount: number;
    topology: string;
}

const institutionsMockData: InstitutionData[] = [
    {
        id: 0,
        name: "Université Paris 8",
        size: "Moyenne structure",
        subscription: "10 € / mois",
        roomsCount: 4,
        stationsCount: 10,
        topology: "Lorem"
    },
]

export const SliderMarkCircle: React.FC<{ isActive: boolean }> = ({isActive}) => (
    <Center>
        <Circle position="absolute" size="18px" bgColor={isActive ? "Marionum.700" : "gray.200"}/>
        <Circle position="absolute" size="14px" bgColor="white"/>
    </Center>
)
/**
 * Ce slider un peu spécifique est ici implémenté de sorte à modifier l'objet user passé en paramètre.
 * Si les données d'entrées sont immuables, il est recommandé :
 * - soit de le transformer en composant controllé agnostique (en lui ajoutant des props "value" et "onChanged" et en enlevant tout état interne),
 * - soit de le transformer en composant métier directement branché sur l'état applicatif (on lui fournira alors un userId en props plutôt qu'un objet complet)
 */
export const PermissionSlider: React.FC<SliderProps & { user: UserData }> = ({user, ...props}) => {
    const value = user.roleLevel === undefined ? 0 : user.roleLevel;
    const [sliderValue, setSliderValue] = useState<number>(value)

    const handleSliderChange = (val: number) => {
        setSliderValue(val)
        if (val === 0 || val === 1 || val === 2 || val === 3 || val === null) user.roleLevel = val;
    }

    const labelStyles = {
        zIndex: 1
    }

    return <Slider aria-label='Niveau de permission' onChange={handleSliderChange} min={0} max={3}
                   value={sliderValue} isDisabled={user.roleLevel === undefined}
                   {...props}>
        <SliderMark value={0}{...labelStyles}>
            <SliderMarkCircle isActive={user.roleLevel !== undefined && sliderValue >= 0}/>
        </SliderMark>
        <SliderMark value={1}{...labelStyles}>
            <SliderMarkCircle isActive={sliderValue >= 1}/>
        </SliderMark>
        <SliderMark value={2} {...labelStyles}>
            <SliderMarkCircle isActive={sliderValue >= 2}/>
        </SliderMark>
        <SliderMark value={3} {...labelStyles}>
            <SliderMarkCircle isActive={sliderValue >= 3}/>
        </SliderMark>
        <SliderTrack bgColor="gray.200">
            <SliderFilledTrack bgColor="Marionum.700"/>
        </SliderTrack>
        {user.roleLevel !== undefined &&
            <SliderThumb w="18px" h="18px" bgColor="white" borderColor="Marionum.700" borderWidth="5px"/>}
    </Slider>
}

export const PermissionsPage: React.FC = () => {
    const [searchTxt, setSearchTxt] = useState('');
    const handleSearchTxtChange: ChangeEventHandler<HTMLInputElement> = e => setSearchTxt(e.target.value)
    const handleSearch = () => console.debug(`Searching ${searchTxt}`)
    const {isOpen: isAddUserModalOpen, onOpen: onAddUserModalOpen, onClose: onAddUserModalClose} = useDisclosure()
    const {isOpen: isImportListOpen, onOpen: onImportListOpen, onClose: onImportListClose} = useDisclosure()

    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationAdminExample tabIndex={2} handleTabsChange={() => {
            }}/>
            <TitleBlock label="Gestion des droits">
                <Spacer/>
                <Menu>
                    <MenuButton as={Button} aria-label='Options' variant="primary" size="lg">
                        + Ajouter
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={onAddUserModalOpen}>Un(e) étudiant(e)</MenuItem>
                        <MenuItem onClick={onAddUserModalOpen}>Un(e) enseignant(e)</MenuItem>
                        <MenuItem onClick={onImportListOpen}>Un import de liste</MenuItem>
                        <MenuItem>Un établissement</MenuItem>
                    </MenuList>
                </Menu>
                <AddUserModalExample isOpen={isAddUserModalOpen} onClose={onAddUserModalClose}/>
                <ImportListModalExample isOpen={isImportListOpen} onClose={onImportListClose}/>
            </TitleBlock>
            <Box w="100%" bg="Marionum.50" flexGrow={1}>
                {/**
                 * Utiliser IsLazy pour charger à la demande les contenus des panels (https://chakra-ui.com/docs/components/tabs/usage#lazily-mounting-tab-panels)
                 * Si tout est préchargé, isLazy peut être supprimé.
                 **/}
                <Tabs variant="marionumNavigation" isLazy>
                    <Block backgroundColor="white">
                        <TabList fontWeight="bold">
                            <Tab>Utilisateurs</Tab>
                            <Tab>Établissements</Tab>
                        </TabList>
                        <TabIndicator/>
                    </Block>
                    <Block hasTopBorder>
                        <TabPanels>
                            <TabPanel>
                                {/* Utilisateurs */}
                                <HStack paddingBottom="16px">
                                    <InputGroup width="557px" size='md'>
                                        <Input placeholder="Rechercher un utilisateur par son nom, prénom…"
                                               value={searchTxt} onChange={handleSearchTxtChange}
                                               pr="7rem" type="text" bgColor="white"
                                        />
                                        <InputRightElement width="7rem" pr="1px">
                                            <Button variant="primary" size="sm"
                                                    onClick={handleSearch}> Rechercher </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <Select id="permissions" placeholder="Droits"
                                            variant="outline" fontSize="md" bgColor="white" width="250px">
                                        <option value='option1'>Droits 1</option>
                                        <option value='option2'>Droits 2</option>
                                    </Select>
                                </HStack>
                                <TableContainer border="1px solid" borderColor="Marionum.200" borderRadius="6px">
                                    <Table size="lg">
                                        <Thead>
                                            <Tr>
                                                <Th maxWidth="132px">
                                                    Nom<ArrowDownIcon boxSize="1rem" ml="8px"/>
                                                </Th>
                                                <Th maxWidth="132px">
                                                    Prénom<ArrowDownIcon boxSize="1rem" ml="8px"/>
                                                </Th>
                                                <Th maxWidth="193px">
                                                    Email
                                                </Th>
                                                <Th maxWidth="132px">
                                                    Statut
                                                </Th>
                                                <Th maxWidth="120px">
                                                    Animateur<ArrowDownIcon boxSize="1rem" ml="8px"/>
                                                </Th>
                                                <Th maxWidth="140px">
                                                    Organisateur<ArrowDownIcon boxSize="1rem" ml="8px"/>
                                                </Th>
                                                <Th maxWidth="140px">
                                                    Préparateur<ArrowDownIcon boxSize="1rem" ml="8px"/>
                                                </Th>
                                                <Th maxWidth="140px">
                                                    Admin<ArrowDownIcon boxSize="1rem" ml="8px"/>
                                                </Th>
                                                <Th><VisuallyHidden>Actions</VisuallyHidden></Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {usersMockData.map((user) => (
                                                <Tr key={user.id}>
                                                    <Td>{user.name}</Td>
                                                    <Td>{user.surname}</Td>
                                                    <Td>{user.email}</Td>
                                                    <Td><Tag variant='solid' bgColor="#2BAAAF">{user.status}</Tag></Td>
                                                    <Td maxWidth="120px" overflow="visible">
                                                        <PermissionSlider user={user}
                                                                          position="absolute" left="40px" top={0}
                                                                          width="420px"
                                                        />
                                                        <VisuallyHidden>{user.roleLevel != null && user.roleLevel >= 0 ? "est Animateur" : "n'est pas Animateur"}</VisuallyHidden>
                                                    </Td>
                                                    <Td>
                                                        <VisuallyHidden>{user.roleLevel != null && user.roleLevel >= 1 ? "est Organisateur" : "n'est pas Organisateur"}</VisuallyHidden>
                                                    </Td>
                                                    <Td>
                                                        <VisuallyHidden>{user.roleLevel != null && user.roleLevel >= 2 ? "est Préparateur" : "n'est pas Préparateur"}</VisuallyHidden>
                                                    </Td>
                                                    <Td>
                                                        <VisuallyHidden>{user.roleLevel != null && user.roleLevel >= 3 ? "est Admin" : "n'est pas Admin"}</VisuallyHidden>
                                                    </Td>
                                                    <Td>
                                                        <Button variant="secondary" maxW="32px" w="32px" h="32px"
                                                                p="0px">
                                                            <MdDelete size="16px"/>
                                                        </Button>
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
                            </TabPanel>
                            <TabPanel>
                                {/* Établissements */}
                                <InputGroup width="557px" size='md' paddingBottom="16px">
                                    <Input placeholder="Rechercher un utilisateur par son nom, prénom…"
                                           value={searchTxt} onChange={handleSearchTxtChange}
                                           pr="7rem" type="text" bgColor="white"
                                    />
                                    <InputRightElement width="7rem" pr="1px">
                                        <Button variant="primary" size="sm"
                                                onClick={handleSearch}> Rechercher </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <TableContainer border="1px solid" borderColor="Marionum.200" borderRadius="6px">
                                    <Table size="lg">
                                        <Thead>
                                            <Tr>
                                                <Th maxWidth="150px">
                                                    Établissement<ArrowDownIcon boxSize="1rem" ml="8px"/>
                                                </Th>
                                                <Th maxWidth="150px">
                                                    Abonnement actuel<ArrowDownIcon boxSize="1rem" ml="8px"/>
                                                </Th>
                                                <Th maxWidth="150px">
                                                    Nombre de salle<ArrowDownIcon boxSize="1rem" ml="8px"/>
                                                </Th>
                                                <Th maxWidth="150px">
                                                    Nombre de postes<ArrowDownIcon boxSize="1rem" ml="8px"/>
                                                </Th>
                                                <Th maxWidth="150px">
                                                    Typologie<ArrowDownIcon boxSize="1rem" ml="8px"/>
                                                </Th>
                                                <Th><VisuallyHidden>Actions</VisuallyHidden></Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {institutionsMockData.map((i) => (
                                                <Tr key={i.id}>
                                                    <Td>{i.name}</Td>
                                                    <Td>
                                                        <VStack alignItems="start" gap="0px">
                                                            <Tag variant='solid' bgColor="#2BAAAF"
                                                                 size="sm">{i.size}</Tag>
                                                            <Text as="span">{i.subscription}</Text>
                                                        </VStack>
                                                    </Td>
                                                    <Td>{i.roomsCount}</Td>
                                                    <Td>{i.stationsCount}</Td>
                                                    <Td>{i.topology}</Td>
                                                    <Td isNumeric>
                                                        <Button variant="secondary" maxW="32px" w="32px" h="32px"
                                                                p="0px">
                                                            <MdDelete size="16px"/>
                                                        </Button>
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
                            </TabPanel>
                        </TabPanels>
                    </Block>
                </Tabs>
            </Box>
        </>
    );
};

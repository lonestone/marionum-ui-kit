import {Block, Button, Snapshot, TitleBlock} from "marionum-ui-kit";
import {NavigationAdminExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    Box,
    Flex,
    Tab,
    TabIndicator,
    Table,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    VisuallyHidden
} from "@chakra-ui/react";
import {ArrowUpIcon, CheckIcon, CloseIcon} from "@chakra-ui/icons";

const snapshotList = [1, 2, 3, 4, 5, 6, 7, 8]
const tagList = ["app1", "tag3", "test", "another", "ubuntu", "networking"]

export const AdminSnapshotListPage: React.FC = () => {
    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationAdminExample tabIndex={0} handleTabsChange={() => {
            }}/>
            <TitleBlock label="Snapshots"/>
            <Box w="100%" bg="Marionum.50" flexGrow={1}>
                {/**
                 * Utiliser IsLazy pour charger à la demande les contenus des panels (https://chakra-ui.com/docs/components/tabs/usage#lazily-mounting-tab-panels)
                 * Si tout est préchargé, isLazy peut être supprimé.
                 **/}
                <Tabs variant="marionumNavigation" isLazy>
                    <Block backgroundColor="white">
                        <TabList fontWeight="bold">
                            <Tab>Snapshots à Valider</Tab>
                            <Tab>Gestion des tags</Tab>
                        </TabList>
                        <TabIndicator/>
                    </Block>
                    <Block hasTopBorder>
                        <TabPanels>
                            <TabPanel>
                                <Flex gap="24px" flexWrap="wrap">
                                    {snapshotList.map(s => (
                                        <Snapshot key={s} title={"Snapshot n°" + s} date="12/2023" tags={["tag", "+3"]}
                                                  description="Ceci est la description du snapshot" onClick={() => {
                                        }}/>
                                    ))}
                                </Flex>
                            </TabPanel>
                            <TabPanel>
                                <TableContainer border="1px solid" borderColor="Marionum.200" borderRadius="6px">
                                    <Table size="lg" width="510px">
                                        <Thead>
                                            <Tr>
                                                <Th width="385px">Nom du tag <ArrowUpIcon boxSize="1rem" ml="8px"/></Th>
                                                <Th width="125px"><VisuallyHidden>Actions</VisuallyHidden></Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {tagList.map((tag) => (
                                                <Tr key={tag}>
                                                    <Td>{tag}</Td>
                                                    <Td>
                                                        <Button variant="ghost" w="32px" h="32px" p="8px"><CheckIcon boxSize="14px" /></Button>
                                                        <Button variant="ghost" w="32px" h="32px" p="8px"><CloseIcon boxSize="12px"/></Button>
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                        </TabPanels>
                    </Block>
                </Tabs>
            </Box>
        </>
    )
        ;
};

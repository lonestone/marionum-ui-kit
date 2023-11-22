import {Block, Button, TitleBlock} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {Box, Flex, Spacer, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, VStack} from "@chakra-ui/react";
import {RiCheckboxCircleFill} from "react-icons/ri";
import {AddIcon} from "@chakra-ui/icons";
import {tpListDataExample, TPListExample} from "../../examples/TPList/TPListExample.tsx";

export const TPListPage: React.FC = () => {
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
                        <TabList fontWeight="bold">
                            <Tab>Prochains TP</Tab>
                            <Tab>Anciens TP</Tab>
                            <Tab>TP Annulés</Tab>
                        </TabList>
                        <TabIndicator/>
                    </Block>
                    <Block hasTopBorder>
                        <TabPanels>
                            <TabPanel>
                                <TPListExample sort="desc" tpList={tpListDataExample}/>
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

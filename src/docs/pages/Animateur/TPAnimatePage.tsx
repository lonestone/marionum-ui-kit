import {AlertTP, Block, Button, TitleBlock} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    AlertIcon,
    Badge,
    Box,
    HStack,
    Stack,
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack
} from "@chakra-ui/react";
import {tpListDataExample, TPListExample} from "../../examples/TPListExample/TPListExample.tsx";
import {FiCopy} from "react-icons/fi";


export const TPAnimatePage: React.FC = () => {
    return (
        <VStack h="100%" gap="0px">
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={0} handleTabsChange={() => {
            }}/>
            <TitleBlock label="Travaux Pratiques"/>
            <Block backgroundColor="white">
                <AlertTP>
                    <HStack>
                        <AlertIcon/>
                        <Stack alignItems="start" gap="0px" color="gray.700">
                            <Badge variant="solid" bgColor="Marionum.700" textTransform="uppercase"
                                   fontWeight="bold" fontSize="xs">
                                En cours
                            </Badge>
                            <Text as="span" fontWeight="bold">Nom de la séance</Text>
                            <Text as="span">28/30 étudiants présents</Text>
                        </Stack>
                    </HStack>
                    <HStack gap="16px" position="absolute" right="16px" bottom="10px">
                        <Button variant="tertiary" leftIcon={<FiCopy/>} fontSize="md">
                            Copier le lien
                        </Button>
                        <Button variant="primary" fontSize="md">
                            Rejoindre le TP
                        </Button>
                    </HStack>
                </AlertTP>
            </Block>
            <Box w="100%" bg="Marionum.50" flexGrow={1} marginTop="26px">
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
                                <TPListExample sort="desc" tpList={[]}/>
                            </TabPanel>
                            <TabPanel>
                                <TPListExample sort="desc" tpList={[]}/>
                            </TabPanel>
                        </TabPanels>
                    </Block>
                </Tabs>
            </Box>
        </VStack>
    )
};

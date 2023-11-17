import {AlertTP, Block, Button, TitleBlock} from "marionum-ui-kit";
import {NavigationStudentExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    AlertIcon,
    Badge,
    Box,
    CircularProgress,
    CircularProgressLabel,
    HStack,
    Spacer,
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
import {MyMachineButton} from "../../../components/MyMachineButton.tsx";


export const TPStudent: React.FC = () => {
    return (
        <VStack h="100%" gap="0px">
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationStudentExample tabIndex={0} handleTabsChange={() => {
            }}/>
            <TitleBlock label="Travaux Pratiques"/>
            <Block backgroundColor="white">
                <AlertTP height="86px">
                    <HStack alignItems="center">
                        <AlertIcon/>
                        <Stack alignItems="start" gap="0px" color="gray.700">
                            <Badge variant="solid" bgColor="Marionum.700" textTransform="uppercase"
                                   fontWeight="bold" fontSize="xs">
                                En cours
                            </Badge>
                            <Text as="span" fontWeight="bold">Nom de la séance</Text>
                        </Stack>
                        <Spacer/>
                        <Text as="span" fontSize="sm" fontWeight="semibold" color="black">Mon TP commence dans</Text>
                        <CircularProgress value={80} color="Marionum.700" trackColor="black" size='54px'>
                            <CircularProgressLabel color="black" fontSize="md" fontWeight="400">
                                1:50
                            </CircularProgressLabel>
                        </CircularProgress>
                        <Button variant="primary" fontSize="md">
                            Rejoindre le TP
                        </Button>
                    </HStack>
                </AlertTP>
                <MyMachineButton marginTop="16px">Ma machine virtuelle</MyMachineButton>
            </Block>
            <Box w="100%" bg="Marionum.50" flexGrow={1} marginTop="26px">
                {/**
                 * Utiliser IsLazy pour charger à la demande les contenus des panels (https://chakra-ui.com/docs/components/tabs/usage#lazily-mounting-tab-panels)
                 * Si tout est préchargé, isLazy peut être supprimé.
                 **/}
                <Tabs variant="marionumNavigation" isLazy>
                    <Block backgroundColor="white">
                        <TabList>
                            <Tab>Prochains TP</Tab>
                            <Tab>Mes activités passées</Tab>
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
                        </TabPanels>
                    </Block>
                </Tabs>
            </Box>
        </VStack>
    )
};

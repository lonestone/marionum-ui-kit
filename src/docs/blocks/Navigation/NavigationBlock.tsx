import {Block} from "../../../layouts/Block.tsx";
import {Flex, Spacer, Tab, TabIndicator, TabList, Tabs} from "@chakra-ui/react";
import {Button} from "../../../components/Button.tsx";

export type NavigationBlockProps = {
    tabIndex: 0,
    handleTabsChange?: (i: number) => void,
};

export const NavigationBlock = ({tabIndex, handleTabsChange}: NavigationBlockProps) => {
    return (
        <Block backgroundColor="Marionum.50">
            <Flex alignItems="center">
                <Tabs variant="marionumNavigation" index={tabIndex} onChange={handleTabsChange}>
                    <TabList>
                        <Tab>Travaux pratiques</Tab>
                        <Tab>Snapshots</Tab>
                        <Tab>Ressources pédagogiques</Tab>
                        <Tab>Aide</Tab>
                        <Tab>Statistiques</Tab>
                    </TabList>
                    <TabIndicator />
                </Tabs>
                <Spacer/>
                <Flex alignItems="center" shrink={0} gap="16px">
                    <Button variant="primary">Module</Button>
                    <Button variant="secondary">Ouvrir un ticket</Button>
                </Flex>
            </Flex>
        </Block>
    );
}
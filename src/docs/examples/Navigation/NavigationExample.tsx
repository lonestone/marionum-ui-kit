import {Block, Button, DropDownIcon, FileQuestionIcon} from "marionum-ui-kit";
import {Flex, Spacer, Tab, TabIndicator, TabList, Tabs} from "@chakra-ui/react";

export type NavigationBlockProps = {
    tabIndex: number,
    handleTabsChange?: (i: number) => void,
};

export const NavigationExample = ({tabIndex, handleTabsChange}: NavigationBlockProps) => {
    return (
        <Block backgroundColor="Marionum.50" hasTopBorder>
            <Flex alignItems="center">
                <Tabs variant="marionumNavigation" index={tabIndex} onChange={handleTabsChange}>
                    <TabList>
                        <Tab>Travaux pratiques</Tab>
                        <Tab>Snapshots</Tab>
                        <Tab>Ressources pédagogiques</Tab>
                        <Tab>Aide</Tab>
                        <Tab>Statistiques</Tab>
                    </TabList>
                    <TabIndicator/>
                </Tabs>
                <Spacer/>
                <Flex alignItems="center" shrink={0} gap="16px">
                    <Button variant="tertiary" rightIcon={<DropDownIcon/>}>Outils tiers</Button>
                    <Button variant="secondary" leftIcon={<FileQuestionIcon/>}>Ouvrir un ticket</Button>
                </Flex>
            </Flex>
        </Block>
    );
}

export const NavigationStudentExample = ({tabIndex, handleTabsChange}: NavigationBlockProps) => {
    return (
        <Block backgroundColor="Marionum.50" hasTopBorder>
            <Flex alignItems="center">
                <Tabs variant="marionumNavigation" index={tabIndex} onChange={handleTabsChange}>
                    <TabList>
                        <Tab>Travaux pratiques</Tab>
                        <Tab>Ressources pédagogiques</Tab>
                        <Tab>Aide</Tab>
                        <Tab>Statistiques</Tab>
                    </TabList>
                    <TabIndicator/>
                </Tabs>
                <Spacer/>
                <Flex alignItems="center" shrink={0} gap="16px">
                    <Button variant="tertiary">Moddle</Button>
                </Flex>
            </Flex>
        </Block>
    );
}
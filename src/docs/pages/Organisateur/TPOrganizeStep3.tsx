import {Block, Button, StepProgress, TitleBlock, WithCalendar} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {Badge, Box, Flex, Heading, HStack, Spacer, VStack} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {SnapshotPageContentExample} from "../Preparateur/SnapshotPage.tsx";

export const TPOrganizeStep3: React.FC = () => {
    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={0} handleTabsChange={() => {
            }}/>
            <TitleBlock label="Organiser un TP">
                <Box bgColor="gray.300" h="2.5rem" marginX="16px" w="2px"/>
                <StepProgress
                    flexGrow={1}
                    index={0}
                    steps={[
                        {
                            description: 'Sélection du snapshot',
                            descriptionLeft: 'Étape suivante : ',
                            title: 'Étape 1'
                        },
                        {
                            description: 'Planification',
                            descriptionLeft: 'Étape suivante : ',
                            title: 'Étape 2'
                        },
                        {
                            description: 'Résumé du TP',
                            descriptionLeft: 'Étape suivante : ',
                            title: 'Étape 3'
                        }
                    ]}
                />
            </TitleBlock>
            <Block backgroundColor="Marionum.50" paddingY="44px" isContent>
                <VStack align="start">
                    <Button variant="lien" leftIcon={<ArrowBackIcon boxSize="4"/>}
                            pl={0} size="xs">Retourner à la liste</Button>
                    <HStack align="center" gap="16px" flexWrap="wrap">
                        <Heading fontSize="2xl" whiteSpace="nowrap">Nom du snapshot</Heading>
                        <Box w="1px" h="1rem" bgColor="gray.300"/>
                        <WithCalendar>12/2023</WithCalendar>
                        <Flex gap="8px">
                            <Badge variant='outline'>Prénom N.</Badge>
                            <Badge variant='solid'>Snapshot public</Badge>
                        </Flex>
                    </HStack>

                    <SnapshotPageContentExample/>
                </VStack>
            </Block>
            <Block backgroundColor="white" paddingY="16px" dockBottom>
                <HStack>
                    <Spacer/>
                    <Button fontSize="lg" variant="primary">Sélectionner ce snapshot</Button>
                </HStack>
            </Block>
        </>
    );
};

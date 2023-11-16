import {Block, Button, Label, StepProgress, TitleBlock} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {Box, Heading, HStack, Input, Spacer, Textarea, VStack} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

export const TPOrganizeStep1: React.FC = () => {
    return (
        <VStack h="100%" gap="0px">
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
                <Heading fontSize="2xl" whiteSpace="nowrap">Description du TP</Heading>
                <Label htmlFor="tpName" label="Nom du TP">
                    <Input id="tpName" placeholder='Nom du TP' variant="outline" size="md" bgColor="white"
                           width="486px"/>
                </Label>
                <Label htmlFor="tpDescription" label="Description">
                    <Textarea id="tpDescription" placeholder='Description' variant="outline" size="md"
                              bgColor="white"/>
                </Label>
                <Spacer/>
            </Block>
            <Block backgroundColor="white" paddingY="16px" dockBottom>
                <HStack>
                    <Spacer/>
                    <Button size="sm" variant="lien" leftIcon={<ChevronLeftIcon boxSize="1rem"/>}>Précédent</Button>
                    <Button size="sm" variant="lien" rightIcon={<ChevronRightIcon boxSize="1rem"/>}>Suivant</Button>
                </HStack>
            </Block>
        </VStack>
    );
};

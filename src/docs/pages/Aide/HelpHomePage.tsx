import {Block, Button, ButtonProps} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {LuPlayCircle} from "react-icons/lu";
import {SlScreenDesktop} from "react-icons/sl";
import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Card,
    Heading,
    HStack,
    Text,
    VStack
} from "@chakra-ui/react";
import React, {PropsWithChildren} from "react";
import {AddIcon, MinusIcon} from "@chakra-ui/icons";
import {UseMarionumIcon} from "../../../components/Icons/UseMarionumIcon.tsx";

export const ButtonCard = ({children, ...props}: ButtonProps) => (
    <Button variant="unstyled" fontSize="md" fontWeight="normal" w="370px" height="188px" {...props}>
        <Card variant="elevated" color="gray.600" p="32px"
              border="1px solid" borderColor="Marionum.200" boxShadow="none"
              sx={{_hover: {bgColor: 'Marionum.200', borderColor: 'Marionum.700'}}}>
            {children}
        </Card>
    </Button>)

export const FAQAccordionItem = ({children, label}: PropsWithChildren<{ label: string }>) => (
    <AccordionItem border="0px">{({isExpanded}) => (<>
        <h2>
            <AccordionButton>
                <Heading as="h4" flex='1' textAlign='left' fontSize="lg">{label}</Heading>
                {isExpanded ? (
                    <MinusIcon fontSize='12px'/>
                ) : (
                    <AddIcon fontSize='12px'/>
                )}
            </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
    </>)}</AccordionItem>)

export const HelpHomePage: React.FC = () => {
    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={3} handleTabsChange={() => {
            }}/>
            <Block backgroundColor="white" paddingY="24px">
                <VStack>
                    <Heading size="lg">Besoin d'aide ?</Heading>
                    <Text>Lorem ipsum</Text>
                </VStack>
            </Block>
            <Block backgroundColor="white" isContent>
                <HStack>
                    <ButtonCard onClick={undefined}>
                        <VStack gap="8px">
                            <LuPlayCircle size="48px"/>
                            <Text fontSize="xl" fontWeight="bold">Commencer avec Marionum</Text>
                            <Text textAlign="center">Lorem ipsum dolor sit amet consectetur.</Text>
                        </VStack>
                    </ButtonCard>
                    <ButtonCard onClick={undefined}>
                        <VStack gap="8px">
                            <UseMarionumIcon boxSize="48px"/>
                            <Text fontSize="xl" fontWeight="bold">Utiliser Marionum</Text>
                            <Text textAlign="center">Lorem ipsum dolor sit amet consectetur.</Text>
                        </VStack>
                    </ButtonCard>
                    <ButtonCard onClick={undefined}>
                        <VStack gap="8px">
                            <SlScreenDesktop size="48px"/>
                            <Text fontSize="xl" fontWeight="bold">Snapshots et TP</Text>
                            <Text textAlign="center">Lorem ipsum dolor sit amet consectetur.</Text>
                        </VStack>
                    </ButtonCard>
                </HStack>

                <VStack width="794px" borderRadius="6px" margin="32px auto" bgColor="Marionum.50" padding="32px">
                    <Heading as="h3" fontSize="3xl">FAQ</Heading>
                    <Text>Lorem ipsum</Text>
                    <Accordion defaultIndex={[0]} allowMultiple w="100%">
                        <FAQAccordionItem label="A quoi sert Marionum ?">
                            Lorem ipsum dolor sit amet consectetur. Semper placerat orci elit cursus tellus est ac. Urna
                            nulla tellus quis donec ut. Feugiat eget lacus mi ac. Vitae et eu felis feugiat. Platea sed
                            scelerisque egestas purus dignissim tellus.
                        </FAQAccordionItem>
                        <FAQAccordionItem label="Par où dois-je commencer ?">
                            Lorem ipsum dolor sit amet consectetur. Semper placerat orci elit cursus tellus est ac. Urna
                            nulla tellus quis donec ut. Feugiat eget lacus mi ac. Vitae et eu felis feugiat. Platea sed
                            scelerisque egestas purus dignissim tellus.
                        </FAQAccordionItem>
                        <FAQAccordionItem label="Lorem ipsum dolor set amet consectetur ?">
                            Lorem ipsum dolor sit amet consectetur. Semper placerat orci elit cursus tellus est ac. Urna
                            nulla tellus quis donec ut. Feugiat eget lacus mi ac. Vitae et eu felis feugiat. Platea sed
                            scelerisque egestas purus dignissim tellus.
                        </FAQAccordionItem>
                    </Accordion>
                </VStack>
            </Block>
        </>
    )
        ;
};

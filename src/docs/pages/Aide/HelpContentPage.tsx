import {Block, Button} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, HStack, Link, Stack, Text} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {LuPlayCircle} from "react-icons/lu";
import React from "react";
import {UseMarionumIcon} from "../../../components/Icons/UseMarionumIcon.tsx";
import {SlScreenDesktop} from "react-icons/sl";

export const HelpContentPage: React.FC = () => {
    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={3} handleTabsChange={() => {
            }}/>
            <Block isContent>
                <HStack alignItems="start">
                    {/* Left Menu */}
                    <Box width="222px">
                        <Button variant="lien" leftIcon={<ArrowBackIcon boxSize="4"/>} pl={0} size="xs" mt="25px">
                            Retourner à l'aide
                        </Button>
                        <Stack gap="24px" mt="34px">
                            <a href="#">
                                <HStack>
                                    <LuPlayCircle size="24px" style={{display: 'inline-block'}}/>
                                    <Text as="span" fontSize="sm" fontWeight="semibold">Commencer avec
                                        Marionum</Text>
                                </HStack>
                            </a>
                            <a href="#">
                                <HStack>
                                    <UseMarionumIcon boxSize="24px" style={{display: 'inline-block'}}/>
                                    <Text as="span" fontSize="sm" fontWeight="semibold">Utiliser Marionum</Text>
                                </HStack>
                            </a>
                            <a href="#">
                                <HStack>
                                    <SlScreenDesktop size="24px" style={{display: 'inline-block'}}/>
                                    <Text as="span" fontSize="sm" fontWeight="semibold">Snapshots et TP</Text>
                                </HStack>
                            </a>
                        </Stack>
                    </Box>
                    {/* Right Content */}
                    <Box flex={1} marginLeft="48px" paddingBottom="48px">
                        <Breadcrumb fontSize="md" separator={<Text as="span" color="Marionum.300">/</Text>}
                                    marginTop="22px" marginLeft="48px">
                            <BreadcrumbItem>
                                <BreadcrumbLink href='#'>Aide</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Utiliser Marionum</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Stack mt="34px" borderLeft="1px solid" borderColor="gray.200" paddingLeft="48px">
                            <Heading mb="40px">Utiliser Marionum</Heading>
                            <Stack gap="24px">
                                <Heading as="h3" fontSize="2xl">Introduction à Marionum</Heading>
                                <Link fontSize="lg" textDecoration="underline">Qu'est ce que Marionum ?</Link>
                                <Link fontSize="lg" textDecoration="underline">Guider de départ</Link>
                                <Link fontSize="lg" textDecoration="underline">Glossaire</Link>
                                <Heading as="h3" fontSize="2xl" mt="16px">Introduction à Marionum</Heading>
                                <Link fontSize="lg" textDecoration="underline">Qu'est ce que Marionum ?</Link>
                                <Link fontSize="lg" textDecoration="underline">Guider de départ</Link>
                                <Link fontSize="lg" textDecoration="underline">Glossaire</Link>
                            </Stack>
                        </Stack>
                    </Box>
                </HStack>
            </Block>
        </>
    );
};

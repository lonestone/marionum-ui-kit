import {Block, Button} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, HStack, Stack, Text} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import React from "react";

export const HelpGuidePage: React.FC = () => {
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
                    </Box>
                    {/* Right Content */}
                    <Box flex={1} marginLeft="48px" paddingBottom="48px">
                        <Breadcrumb fontSize="md" separator={<Text as="span" color="Marionum.300">/</Text>}
                                    marginTop="22px" marginLeft="48px">
                            <BreadcrumbItem>
                                <BreadcrumbLink href='#'>Aide</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink href='#'>Utiliser Marionum</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Guide de départ</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Stack mt="34px" borderLeft="1px solid" borderColor="gray.200" w="610px" paddingLeft="48px">
                            <Heading mb="40px">Guide de départ</Heading>
                            <Heading as="h3" fontSize="2xl" mb="16px">Guide de départ</Heading>
                            <Text color="gray.600"  mb="16px">
                                Lorem ipsum dolor sit amet consectetur. Bibendum urna metus elit viverra euismod.
                                Vestibulum arcu hac viverra dignissim nunc ut vel. Interdum nibh sit natoque ut vel
                                urna. Aenean cursus velit ut ullamcorper venenatis orci. Et non ac in gravida. Vel
                                interdum nec aliquam volutpat turpis. Vulputate facilisis scelerisque et pellentesque
                                viverra nunc. Ultrices feugiat volutpat in purus. Cras pretium metus vitae id facilisis.
                            </Text>
                            <Box w="551px" h="254px" flexShrink="0">
                                {/* Insérer la vidéo ici */}
                                <Box w="100%" h="100%" bgColor="blue.200"/>
                            </Box>
                        </Stack>
                    </Box>
                </HStack>
            </Block>
        </>
    );
};

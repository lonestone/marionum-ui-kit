import {Block, Button, ShareIcon, SuspensionPointsIcon, WithCalendar} from "marionum-ui-kit";
import {NavigationExample} from "../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../examples/Header/HeaderExample.tsx";
import {
    Badge,
    Box,
    Flex,
    Heading,
    HStack,
    Spacer,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    VStack
} from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons'
import {Packet} from "../../components/Packet/Packet.tsx";
import {Comment} from "../../components/Comment/Comment.tsx";


export const SnapshotPage: React.FC = () => {
    const packetList = [{
        title: "Linux",
        version: "Ubuntu 18.0"
    }, {
        title: "Java",
        version: "OpenJDK 1.16"
    }, {
        title: "Node",
        version: "18.2.0"
    }, {
        title: "Java",
        version: "OpenJDK 1.16"
    }, {
        title: "Linux",
        version: "Ubuntu 18.0"
    }, {
        title: "Node",
        version: "18.2.0"
    }]

    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={0} handleTabsChange={() => {
            }}/>
            <Block backgroundColor="white" paddingY="24px" hasBottomBorder>
                <Flex alignItems="center" gap="16px">
                    <VStack align="start">
                        <Button variant="lien" leftIcon={<ArrowBackIcon boxSize="4"/>}
                                pl={0} size="xs" marginTop="-2px">Retourner à la liste</Button>
                        <HStack align="center" gap="16px" flexWrap="wrap">
                            <Heading fontSize="2xl" whiteSpace="nowrap">Nom du snapshot</Heading>
                            <Box w="1px" h="1rem" bgColor="gray.300"/>
                            <WithCalendar>12/2023</WithCalendar>
                            <Flex gap="8px">
                                <Badge variant='outline'>Prénom N.</Badge>
                                <Badge variant='solid'>Snapshot public</Badge>
                            </Flex>
                        </HStack>
                    </VStack>
                    <Spacer/>
                    <Button variant="tertiary" size="lg" leftIcon={<ShareIcon/>} flexShrink={0}>Dupliquer ce
                        snapshot</Button>
                    <Button variant="primary" size="lg" leftIcon={<ShareIcon/>}>Diffuser</Button>
                    <Button variant="icon" size="lg"><SuspensionPointsIcon/></Button>
                </Flex>
                <Text fontSize="md" marginTop="24px" width="891px">Lorem ipsum dolor sit amet consectetur. Tellus donec
                    aliquet
                    feugiat dictumst sed
                    dapibus pretium euismod. In dignissim magna augue auctor non neque ultrices. Massa diam dictum dui
                    vestibulum velit non eu vitae nulla. Scelerisque amet turpis malesuada dui id sed ornare ut. Risus
                    vel dignissim pulvinar elit. Mi amet libero quam odio feugiat dictum urna.</Text>
                <Flex gap="8px" marginTop="13px">
                    <Badge variant='outline'>BDD</Badge>
                    <Badge variant='outline'>PHP</Badge>
                    <Badge variant='outline'>C#</Badge> <Badge variant='outline'>BDD</Badge>
                    <Badge variant='outline'>PHP</Badge>
                    <Badge variant='outline'>C#</Badge>
                </Flex>
                <HStack marginTop="28px">
                    <Heading fontSize="lg" as="h3">Principales applications et paquets installés</Heading>
                    <Box w="1px" h="1.2rem" marginLeft="4px" bgColor="gray.300"/>
                    <Button variant="lien" size="sm" color="black" p="4px">Voir tous les paquets</Button>
                </HStack>
                <Flex marginTop="22px" gap="16px" flexWrap="wrap">
                    {packetList.map((p, i) => (
                        <Packet key={i} title={p.title} version={p.version}
                                imageUrl="https://via.placeholder.com/116/D8DFFC"
                                width="384px"
                        />
                    ))}
                </Flex>

                <HStack marginTop="60px" gap="1rem">
                    <Heading fontSize="lg" as="h3">Diffusé à</Heading>
                    <Badge variant="outline" fontSize="xs" p="7px 8px">Tout Marionum</Badge>
                </HStack>

                <Heading marginTop="40px" fontSize="lg" as="h3">Commentaires</Heading>
                <VStack marginTop="16px" align="start">
                    <Comment
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim cursus
                            at ullamcorper mauris non. Integer aliquam, scelerisque."
                        author="Nom de l'autrice ou auteur"
                        date="12/2023"/>
                    <Comment
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim cursus
                            at ullamcorper mauris non. Integer aliquam, scelerisque."
                        author="Nom de l'autrice ou auteur"
                        date="12/2023"/>
                </VStack>

                <Heading marginTop="40px" fontSize="lg" as="h3">Historique des modifications</Heading>
                <TableContainer width="600px" border="1px solid" borderColor="Marionum.200" borderRadius="6px"
                                marginTop="27px">
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Date</Th>
                                <Th>Action</Th>
                                <Th textAlign="center">Utilisateur</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td><WithCalendar>10/01/2024</WithCalendar></Td>
                                <Td>Suppression du paquet</Td>
                                <Td textAlign="center"><Badge variant='outline'>Prénom N.</Badge></Td>
                            </Tr>
                            <Tr>
                                <Td><WithCalendar>10/12/2023</WithCalendar></Td>
                                <Td>Ajout de 2 applications</Td>
                                <Td textAlign="center"><Badge variant='outline'>Prénom N.</Badge></Td>
                            </Tr>
                            <Tr>
                                <Td><WithCalendar>10/11/2023</WithCalendar></Td>
                                <Td>Création</Td>
                                <Td textAlign="center"><Badge variant='outline'>Prénom N.</Badge></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Block>
            <div>
                Ici le snapshot
            </div>
        </>
    );
};

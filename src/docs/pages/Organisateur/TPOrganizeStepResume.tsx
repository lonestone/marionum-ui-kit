import {Block, Button, Snapshot, TitleBlock, WithCalendar} from "marionum-ui-kit";
import {
    Heading,
    HStack,
    Spacer,
    Table,
    TableContainer,
    Tag,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import {ChevronLeftIcon} from "@chakra-ui/icons";

import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {ValidateSessionModalExample} from "../../examples/ValidateSessionModal/ValidateSessionModalExample.tsx";
import {useState} from "react";

export const TPOrganizeStepResume: React.FC = () => {
    const [isValidated, setValidated] = useState<boolean>(true)
    const {isOpen: isValidateSessionModalOpen, onOpen: onValidateSessionModalOpen, onClose: onValidateSessionModalClose} = useDisclosure()

    function handleValidate(isOk: boolean) {
        if (isOk != isValidated) setValidated(isOk);
        onValidateSessionModalOpen()
    }

    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={0} handleTabsChange={() => {
            }}/>
            <TitleBlock label="Résumé de TP"/>
            <Block backgroundColor="Marionum.50" paddingY="44px" isContent>
                <VStack align="start">
                    <Heading as="h3" fontSize="2xl" whiteSpace="nowrap">Nom de la séance</Heading>
                    <Text as="div" fontSize="md" marginTop="24px" width="891px">Lorem ipsum dolor sit amet consectetur.
                        Tellus donec
                        aliquet feugiat dictumst sed dapibus pretium euismod. In dignissim magna augue auctor non neque
                        ultrices. Massa diam dictum dui vestibulum velit non eu vitae nulla. Scelerisque amet turpis
                        malesuada dui id sed ornare ut. Risus vel dignissim pulvinar elit. Mi amet libero quam odio
                        feugiat
                        dictum urna.</Text>
                    <Heading as="h3" fontSize="lg" whiteSpace="nowrap" marginTop="32px">Snapshot utilisé</Heading>
                    <Snapshot title={"Nom du snapshot"} date={"04/2023"} tags={["tag1", "tag2"]}
                              description={"Description du S."} onClick={() => {
                    }}/>
                    <Heading marginTop="40px" fontSize="lg" as="h3">Dates</Heading>
                    <TableContainer width="616px" border="1px solid" borderColor="Marionum.200" borderRadius="6px"
                                    marginTop="8px">
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th width="8rem">Date</Th>
                                    <Th>Heure de début</Th>
                                    <Th>Durée du TP</Th>
                                    <Th width="5rem">Heure de fin</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td fontSize="xs" fontWeight="semibold"><WithCalendar>10/01/2024</WithCalendar></Td>
                                    <Td>12:00</Td>
                                    <Td>2 h</Td>
                                    <Td>14:00</Td>
                                </Tr>
                                <Tr>
                                    <Td fontSize="xs" fontWeight="semibold"><WithCalendar>11/01/2024</WithCalendar></Td>
                                    <Td>12:00</Td>
                                    <Td>2 h</Td>
                                    <Td>14:00</Td>
                                </Tr>
                                <Tr>
                                    <Td fontSize="xs" fontWeight="semibold"><WithCalendar>12/01/2024</WithCalendar></Td>
                                    <Td>12:00</Td>
                                    <Td>2 h</Td>
                                    <Td>14:00</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>

                    <Heading marginTop="40px" fontSize="lg" as="h3">Étudiants</Heading>
                    <Tag variant='solid' bgColor="#2BAAAF">30</Tag>
                    <Text as="div" fontSize="md">
                        TP non noté
                    </Text>
                </VStack>
            </Block>
            <Block backgroundColor="white" paddingY="16px" dockBottom>
                <HStack gap="32px">
                    <Spacer/>
                    <Button size="sm" variant="lien" leftIcon={<ChevronLeftIcon boxSize="1rem"/>}>Précédent</Button>
                    <Button size="lg" variant="primary" onClick={() => handleValidate(true)}>Valider le TP</Button>
                    <Button size="lg" variant="primary" onClick={() => handleValidate(false)}>Tester refus</Button>
                </HStack>
            </Block>
            <ValidateSessionModalExample isOpen={isValidateSessionModalOpen} onClose={onValidateSessionModalClose}
                                         studentLink="https://studentLink" teacherLink="https://teackerlink"
                                         isBookingConfirmed={isValidated}/>
        </>
    );
};

import {Block, Button, SnapshotSmall} from "marionum-ui-kit";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {Flex, Grid, GridItem, Heading, HStack, Spacer, Tag, Text, VStack} from "@chakra-ui/react";
import {ArrowBackIcon, DownloadIcon} from "@chakra-ui/icons";
import {Station, StationProps} from "../../../components/Station/Station.tsx";

const stationsDataExemple: StationProps[] = [
    {status: 'disconnected', statusText: 'Libre', label: 'Poste 1', userName: ''},
    {status: 'disconnected', statusText: 'Libre', label: 'Poste 2', userName: ''},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 3', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'En erreur', label: 'Poste 4', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 5', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 6', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 7', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 8', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 9', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 10', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 11', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 12', userName: 'Nom de l\'utilisateur'},
    {status: 'unavailable', statusText: '', label: 'Poste 13', userName: 'Poste indisponible'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 14', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 15', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 16', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 17', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 18', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 19', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 20', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 21', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 22', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 23', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 24', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 25', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 26', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 27', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 28', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 29', userName: 'Nom de l\'utilisateur'},
    {status: 'disconnected', statusText: 'Connecté', label: 'Poste 30', userName: 'Nom de l\'utilisateur'}
]

export const SessionOverPage: React.FC = () => {
    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            {/* Block pour background et largeur du contenu de la page */}
            <Block backgroundColor="white" paddingY="24px">
                {/* Titre, lien de retour et actions */}
                <Flex alignItems="center" gap="16px">
                    <VStack align="start">
                        <Button variant="lien" leftIcon={<ArrowBackIcon boxSize="4"/>}
                                pl={0} size="xs" color="Marionum.900">Retourner à la liste</Button>
                        <HStack align="center" gap="16px" flexWrap="wrap">
                            <Heading fontSize="3xl" whiteSpace="nowrap">Nom de la séance</Heading>
                        </HStack>
                        <HStack marginTop="16px" gap="16px">
                            <Tag variant="solid" bgColor="#2BAAAF">TP Terminé</Tag>
                            {/* Variante ancien TP */}
                            <Text as="div" fontSize="sm" color="gray.700">TP noté</Text>
                            {/* /Variante ancien TP */}
                        </HStack>
                    </VStack>
                    <Text as="div" fontSize="sm" color="gray.700">11/05/2023<br/>de 16h à 17h</Text>
                    <SnapshotSmall title="Nom du snapshot" tags={["app1", "pack2", "+4"]}/>
                    <Spacer/>
                    <Button size="2xs" leftIcon={<DownloadIcon/>} bgColor="Marionum.900">
                        Télécharger la liste des présences
                    </Button>
                </Flex>
            </Block>
            <Block backgroundColor="Marionum.50" paddingY="20px" isContent>
                <HStack gap="16px">
                    <Text as="span" fontSize="lg" fontWeight="bold" color="Marionum.950">
                        28/30 participants
                    </Text>
                    <HStack gap="8px">
                        <Button variant="tertiary" size="3xs" color="Marionum.950" border="1px solid transparent">Ajouter
                            plusieurs sièges</Button>
                        <Button variant="tertiary" size="3xs" color="Marionum.950"
                                border="1px solid transparent">+1</Button>
                        <Button variant="tertiary" size="3xs" color="Marionum.950"
                                border="1px solid transparent">+5</Button>
                        <Button variant="tertiary" size="3xs" color="Marionum.950"
                                border="1px solid transparent">+10</Button>
                    </HStack>
                </HStack>
                <Grid templateColumns='repeat(6, 1fr)' gap="8px" marginTop="32px">
                    <GridItem gridColumn="5 / 7" gridRow="1 / 3">
                        <Station status="connected" statusText="Connecté" userName="Brigitte MALVOISIN"
                                 label="Animateur" isAnimator/>
                    </GridItem>
                    {stationsDataExemple.map(stationProps => (
                        <GridItem key={stationProps.label}><Station {...stationProps} /></GridItem>
                    ))}
                </Grid>
            </Block>
        </>
    )
}

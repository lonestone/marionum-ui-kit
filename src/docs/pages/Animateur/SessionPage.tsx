import {Block, Button} from "marionum-ui-kit";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {Flex, Grid, GridItem, Heading, HStack, Progress, Spacer, Text, VStack} from "@chakra-ui/react";
import {ArrowBackIcon, CloseIcon} from "@chakra-ui/icons";
import {FiCopy} from "react-icons/fi";
import {Station, StationProps} from "../../../components/Station/Station.tsx";

const stationsDataExemple: StationProps[] = [
    {status: 'open', statusText: 'Libre', label: 'Poste 1', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 2', userName: ''},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 3', userName: 'Nom de l\'utilisateur'},
    {status: 'error', statusText: 'En erreur', label: 'Poste 4', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 5', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 6', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 7', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 8', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 9', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 10', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 11', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 12', userName: 'Nom de l\'utilisateur'},
    {status: 'unavailable', statusText: '', label: 'Poste 13', userName: 'Poste indisponible'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 14', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 15', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 16', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 17', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 18', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 19', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 20', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 21', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 22', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 23', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 24', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 25', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 26', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 27', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 28', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 29', userName: 'Nom de l\'utilisateur'},
    {status: 'connected', statusText: 'Connecté', label: 'Poste 30', userName: 'Nom de l\'utilisateur'}
]

export const SessionPage: React.FC = () => {
    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            {/* Block pour background et largeur du contenu de la page */}
            <Block backgroundColor="white" paddingY="24px">
                {/* Titre, lien de retour et actions */}
                <Flex alignItems="end" gap="16px">
                    <VStack align="start">
                        <Button variant="lien" leftIcon={<ArrowBackIcon boxSize="4"/>}
                                pl={0} size="xs" color="Marionum.900">Retourner à la liste</Button>
                        <HStack align="center" gap="16px" flexWrap="wrap">
                            <Heading fontSize="3xl" whiteSpace="nowrap">Nom de la séance</Heading>
                            <Button size="2xs" leftIcon={<FiCopy/>} bgColor="Marionum.900">Copier le lien</Button>
                        </HStack>
                    </VStack>
                    <Spacer/>
                    <Button variant="warning" size="lg" leftIcon={<CloseIcon boxSize="0.6rem" />} flexShrink={0}>
                        Interrompre le TP
                    </Button>
                </Flex>
                <HStack marginTop="8px" gap="16px">
                    <Progress value={80} height="6px" width="502px"/>
                    <Text as="span"><strong>75 min restantes</strong> /90 min</Text>
                    <Button size="2xs" variant="tertiary" color="gray.700">Rallonger</Button>
                </HStack>
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
                        <Station status="connected" statusText="Connecté" userName="Brigitte MALVOISIN" label="Animateur" isAnimator />
                    </GridItem>
                    {stationsDataExemple.map(stationProps => (
                        <GridItem key={stationProps.label}><Station {...stationProps} /></GridItem>
                    ))}
                </Grid>
            </Block>
        </>
    )
}

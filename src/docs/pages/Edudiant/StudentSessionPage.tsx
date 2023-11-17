import {Block, Button} from "marionum-ui-kit";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    CircularProgress,
    CircularProgressLabel,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Spacer,
    Text,
    VStack
} from "@chakra-ui/react";
import {ArrowBackIcon, CloseIcon} from "@chakra-ui/icons";
import {Station, StationProps} from "../../../components/Station/Station.tsx";

const stationsDataExemple: StationProps[] = [
    {status: 'connected', statusText: 'Connecté', label: 'Poste 1', userName: 'Nom de l\'utilisateur'},
    {status: 'open', statusText: 'Libre', label: 'Poste 2', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 3', userName: ''},
    {status: 'error', statusText: 'En erreur', label: 'Poste 4', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 5', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 6', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 7', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 8', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 9', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 10', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 11', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 12', userName: ''},
    {status: 'unavailable', statusText: '', label: 'Poste 13', userName: 'Poste indisponible'},
    {status: 'open', statusText: 'Libre', label: 'Poste 14', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 15', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 16', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 17', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 18', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 19', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 20', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 21', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 22', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 23', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 24', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 25', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 26', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 27', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 28', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 29', userName: ''},
    {status: 'open', statusText: 'Libre', label: 'Poste 30', userName: ''},
]

export const StudentSessionPage: React.FC = () => {
    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            {/* Block pour background et largeur du contenu de la page */}
            <Block backgroundColor="white">
                {/* Titre, lien de retour et actions */}
                <Flex alignItems="end" gap="16px" paddingTop="24px">
                    <VStack align="start">
                        <Button variant="lien" leftIcon={<ArrowBackIcon boxSize="4"/>}
                                pl={0} size="xs" color="Marionum.900">Retourner à la liste</Button>
                        <HStack align="center" gap="16px" flexWrap="wrap">
                            <Heading fontSize="3xl" whiteSpace="nowrap">Nom de la séance</Heading>
                        </HStack>
                    </VStack>
                    <Spacer/>
                    <Button variant="warning" size="lg" leftIcon={<CloseIcon boxSize="0.6rem"/>} flexShrink={0}>
                        Quitter le TP
                    </Button>
                </Flex>
                <HStack gap="16px" paddingBottom="8px">
                    <Text as="span" fontSize="sm" fontWeight="semibold" color="black">Mon TP commence dans</Text>
                    <CircularProgress value={80} color="Marionum.700" trackColor="black" size='52px' thickness="8px">
                        <CircularProgressLabel color="black" fontSize="md" fontWeight="400">
                            1:50
                        </CircularProgressLabel>
                    </CircularProgress>
                </HStack>
            </Block>
            <Block backgroundColor="Marionum.50" paddingY="20px" isContent>
                <Text as="span" fontSize="lg" fontWeight="bold" color="Marionum.950">
                    28/30 participants
                </Text>
                <Grid templateColumns='repeat(6, 1fr)' gap="8px" marginTop="32px">
                    <GridItem gridColumn="5 / 7" gridRow="1 / 3">
                        <Station status="disconnected" statusText="Déconnecté" userName="Brigitte MALVOISIN"
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

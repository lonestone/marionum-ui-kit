import {Block, Button, Label, StepProgress, TitleBlock} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    Box,
    FormLabel,
    Heading,
    HStack,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Portal,
    Spacer,
    Switch,
    useDisclosure
} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {MdDeleteOutline} from "react-icons/md";
import React, {useState} from "react";
import {IoAddSharp} from "react-icons/io5";
import {AnimatePresence, motion} from "framer-motion";
import {RecurrenceModalExample} from "../../examples/RecurrenceModal/RecurrenceModalExample.tsx";


export const SessionDateExample = ({onRemove, isMultisession}: { onRemove: () => void, isMultisession?: boolean }) => (
    <HStack gap="24px" alignItems="end" marginBottom="16px">
        <Label htmlFor="date" label="Date" marginTop="15px">
            <Input id="date" type="date" placeholder='choisir une date' variant="outline" size="md"
                   bgColor="white"
                   width="282px"/>
        </Label>
        <Label htmlFor="time" label="Heure de début" marginTop="15px">
            <Input id="time" type="time" placeholder='choisir un horaire' variant="outline" size="md"
                   bgColor="white"
                   width="180px"/>
        </Label>
        <Label htmlFor="duration" label="Durée du TP" marginTop="15px">
            <NumberInput id="duration" variant="outline" size="md" bgColor="white"
                         width="180px">
                <NumberInputField/>
                <NumberInputStepper>
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                </NumberInputStepper>
            </NumberInput>
        </Label>

        <Label htmlFor="endtime" label="Heure de fin" marginTop="15px">
            <Input value="14:27" disabled type="time" placeholder='choisir un horaire' variant="outline"
                   size="md" bgColor="white" width="180px"/>
        </Label>
        {isMultisession && <Button variant="secondary" size="md" p="0px 4px" marginTop="15px" onClick={onRemove}>
            <MdDeleteOutline size="1rem"/>
        </Button>}
    </HStack>
)

export const TPOrganizeStep4: React.FC = () => {

    // Recurrence modale
    const {isOpen: isRecurrenceModalOpen, onOpen: onRecurrenceModalOpen, onClose: onRecurrenceModalClose} = useDisclosure()

    const [isMultisession, setMultisession] = useState<boolean>(false)
    const [sessionCount, setSessionCount] = useState<number>(1)
    const sessionMock = []
    for (let i = 0; i < sessionCount; i++) sessionMock.push(i)

    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={0} handleTabsChange={() => {
            }}/>
            <TitleBlock label="Organiser un TP">
                <Box bgColor="gray.300" h="2.5rem" marginX="16px" w="2px"/>
                <StepProgress
                    flexGrow={1}
                    index={1}
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
                <Heading as="h3" fontSize="2xl" whiteSpace="nowrap">Planification</Heading>

                {/* Section Date */}
                <Heading as="h4" fontSize="lg" whiteSpace="nowrap" marginTop="26px">Date(s)</Heading>
                <FormLabel htmlFor="multisession" m="0px" marginTop="22px" fontSize="md" color="gray.500"
                           fontWeight="semibold">
                    TP multiséances <Switch id='multisession' size="lg" isChecked={isMultisession}
                                            onChange={() => {
                                                const v = !isMultisession;
                                                setMultisession(v)
                                                if (!v) setSessionCount(1)
                                            }}/>
                </FormLabel>

                <AnimatePresence>
                    {sessionMock.map((i) => (
                        <motion.div key={i} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                            <SessionDateExample isMultisession={isMultisession}
                                               onRemove={() => setSessionCount(sessionCount - 1)}/>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isMultisession && <Menu>
                    <AnimatePresence>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                            <MenuButton as={Button} variant="primary" fontSize="md" leftIcon={<IoAddSharp/>}>
                                Ajouter
                            </MenuButton>
                        </motion.div>
                    </AnimatePresence>
                    <Portal>
                        <MenuList>
                            <MenuItem onClick={() => setSessionCount(sessionCount + 1)}>Un séance dans ce TP</MenuItem>
                            <MenuItem onClick={onRecurrenceModalOpen}>Récurrence</MenuItem>
                        </MenuList>
                    </Portal>
                </Menu>
                }
                <RecurrenceModalExample isOpen={isRecurrenceModalOpen} onClose={onRecurrenceModalClose}/>

                {/* Section Étudiants */}
                <Heading as="h4" fontSize="lg" whiteSpace="nowrap" marginTop="40px">Étudiants</Heading>
                <Label htmlFor="studentCOunt" label="Nombre d'étudiants" marginTop="15px">
                    <NumberInput id="studentCOunt" variant="outline" size="md" bgColor="white"
                                 width="180px">
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </Label>
                <FormLabel htmlFor="evaluated" m="0px" marginTop="22px" fontSize="md" color="gray.500"
                           fontWeight="semibold">
                    <HStack width="180px"><span>TP noté</span><Spacer/><Switch id='evaluated' size="lg"/></HStack>
                </FormLabel>
                <Spacer/>
            </Block>

            <Block backgroundColor="white" paddingY="16px" dockBottom>
                <HStack>
                    <Spacer/>
                    <Button size="sm" variant="lien" leftIcon={<ChevronLeftIcon boxSize="1rem"/>}>Précédent</Button>
                    <Button size="sm" variant="lien" rightIcon={<ChevronRightIcon boxSize="1rem"/>}>Suivant</Button>
                </HStack>
            </Block>
        </>
    )
}

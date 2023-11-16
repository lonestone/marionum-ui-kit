import {Button, ButtonCheckbox, Label} from "marionum-ui-kit";
import {
    HStack,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Radio,
    RadioGroup,
    Select,
    Spacer,
    Stack,
    Text,
    useCheckboxGroup,
    UseModalProps
} from "@chakra-ui/react";

export const RecurrenceModalExample = ({isOpen, onClose, ...props}: UseModalProps) => {
    const {value, getCheckboxProps} = useCheckboxGroup({
        defaultValue: ['monday'],
    })
    console.debug("selected days: " + JSON.stringify(value))

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" {...props}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Récurrences</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Label htmlFor="every" label="Répéter tous les" marginTop="0px">
                        <HStack>
                            <NumberInput id="every" variant="outline" size="md" bgColor="white" width="89px">
                                <NumberInputField/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper/>
                                    <NumberDecrementStepper/>
                                </NumberInputStepper>
                            </NumberInput>
                            <Select id="everyPeriod" variant="outline" fontSize="md" bgColor="white" width="222px">
                                <option value='week'>Semaine</option>
                                <option value='month'>Mois</option>
                            </Select>
                        </HStack>
                    </Label>
                    <Label htmlFor="dayOfWeek" label="Répéter le">
                        <HStack gap="8px">
                            <ButtonCheckbox {...getCheckboxProps({value: 'monday'})} >Lundi</ButtonCheckbox>
                            <ButtonCheckbox {...getCheckboxProps({value: 'tueday'})} >Mardi</ButtonCheckbox>
                            <ButtonCheckbox {...getCheckboxProps({value: 'wednesday'})} >Mercredi</ButtonCheckbox>
                            <ButtonCheckbox {...getCheckboxProps({value: 'thurday'})} >Jeudi</ButtonCheckbox>
                            <ButtonCheckbox {...getCheckboxProps({value: 'friday'})} >Vendredi</ButtonCheckbox>
                            <ButtonCheckbox {...getCheckboxProps({value: 'saturday'})} >Samedi</ButtonCheckbox>
                        </HStack>
                    </Label>
                    <Label htmlFor="endsAt" label="Se termine" marginBottom="30px">
                        <RadioGroup defaultValue='1'>
                            <Stack>
                                <Radio value='never'>
                                    <Text as="span" fontSize="sm" width="80px">Jamais</Text>
                                </Radio>
                                <HStack>
                                    <Radio value='endDate'>
                                        <Text as="span" display="inline-block" fontSize="sm" width="60px">Le </Text>
                                    </Radio>
                                    <Input id="endDate" type="date" placeholder='Date de fin' variant="outline"
                                           size="md" bgColor="white" width="222px"/>

                                </HStack>
                                <HStack>
                                    <Radio value='occurrencesCount'>
                                        <Text as="span" display="inline-block" fontSize="sm" width="60px">Après </Text>
                                    </Radio>
                                    <NumberInput id="occurrencesCount" max={99} min={1} display="inline-block"
                                                 variant="outline"
                                                 size="md" bgColor="white" width="222px">
                                        <NumberInputField/>
                                        <NumberInputStepper>
                                            <NumberIncrementStepper/>
                                            <NumberDecrementStepper/>
                                        </NumberInputStepper>
                                        <Text as="span" fontSize="sm" position="absolute" left="40px" top="10px"
                                              zIndex={1} pointerEvents="none">occurrences</Text>
                                    </NumberInput>
                                </HStack>
                            </Stack>
                        </RadioGroup>
                    </Label>
                    <HStack gap="12px" marginY="16px">
                        <Spacer/>
                        <Button onClick={onClose} variant="tertiary" fontSize="md">Annuler</Button>
                        <Button variant="primary" fontSize="md">Ajouter</Button>
                    </HStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

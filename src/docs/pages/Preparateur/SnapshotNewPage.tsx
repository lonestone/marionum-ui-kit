import {Block, Button, Label, Packet, TitleBlock} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Spacer,
    Tag,
    TagCloseButton,
    TagLabel,
    Textarea,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import {CiSearch} from "react-icons/ci";
import {useState} from "react";
import {Multiselect} from "../../../components/Multiselect.tsx";
import {AnimatePresence, motion} from "framer-motion";

const noop = () => {
};
export const SnapshotNewPage: React.FC = () => {
    // input data (example mocks)
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
        title: "Java 2",
        version: "OpenJDK 1.16"
    }, {
        title: "Linux 2",
        version: "Ubuntu 18.0"
    }, {
        title: "Node 2",
        version: "18.2.0"
    }]

    const tags = ["Node", "React", "Python", ".NET core"]

    // state
    const {isOpen: isPacketsOpen, onOpen: onPacketsOpen, onClose: onPacketsClose} = useDisclosure()

    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [selectedPackets, setSelectedPackets] = useState<string[]>([]);

    function handleRemoveSelectedTag(tag: string) {
        const index = selectedTags.indexOf(tag)
        if (index > 0) {
            setSelectedTags([...selectedTags.slice(0, index), ...selectedTags.slice(index + 1)])
        } else if (index === 0) {
            setSelectedTags([...selectedTags.slice(1)])
        }
    }

    function handleRemoveSelectedPacket(p: string) {
        const index = selectedPackets.indexOf(p)
        if (index > 0) {
            setSelectedPackets([...selectedPackets.slice(0, index), ...selectedPackets.slice(index + 1)])
        } else if (index === 0) {
            setSelectedPackets([...selectedPackets.slice(1)])
        }
    }

    function handleAddPacket(p: string) {
        setSelectedPackets([...selectedPackets, p])
    }

    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={1} handleTabsChange={noop}/>

            {/* Titre, lien de retour et actions */}
            <TitleBlock label="Nouveau snapshot"/>

            {/* Block pour background et largeur du contenu de la page */}
            <VStack>
                <Block backgroundColor="Marionum.50" paddingY="44px" hasBottomBorder>
                    <Heading fontSize="2xl" whiteSpace="nowrap">Description du snapshot</Heading>
                    <Label htmlFor="snapshotName" label="Nom du snapshot">
                        <Input name="snapshotName" placeholder='' variant="outline" size="md" bgColor="white"
                               width="486px"/>
                    </Label>
                    <Label htmlFor="snapshotDescription" label="Description">
                        <Textarea name="snapshotDescription" placeholder='' variant="outline" size="md"
                                  bgColor="white"/>
                    </Label>
                    <Label htmlFor="tags" label="Tags">
                        <Multiselect items={tags} selectedItems={selectedTags} setSelectedItems={setSelectedTags}>
                            {((inputProps) => (
                                <InputGroup width="486px">
                                    <Input name="tags" {...inputProps} placeholder='Ajouter ou rechercher un tag'
                                           variant="outline" size="md" bgColor="white"/>
                                    <InputRightElement pr="16px">
                                        <Icon as={CiSearch} boxSize="2rem" color="Marionum.700"/>
                                    </InputRightElement>
                                </InputGroup>
                            ))}
                        </Multiselect>
                        <HStack gap="8px" mt="16px" height="20px">
                            {selectedTags.map(t => <Tag key={t} size="sm" variant="subtle" bgColor="Marionum.200">
                                <TagLabel>{t}</TagLabel>
                                <TagCloseButton onClick={() => handleRemoveSelectedTag(t)}/>
                                <input type="hidden" name="tags" value={t}/>
                            </Tag>)}
                        </HStack>
                    </Label>

                    {/* Applications et paquets */}
                    <HStack marginTop="28px">
                        <Heading fontSize="lg" as="h3">Ajouter des paquets</Heading>
                        <Box w="1px" h="1.2rem" marginLeft="4px" bgColor="gray.300"/>
                        <Button onClick={onPacketsOpen} variant="lien" size="sm" color="black">
                            Voir tous les paquets
                        </Button>
                        <Modal isOpen={isPacketsOpen} onClose={onPacketsClose} size="4xl">
                            <ModalOverlay/>
                            <ModalContent>
                                <ModalHeader>Ajouter des paquets</ModalHeader>
                                <ModalCloseButton/>
                                <ModalBody maxHeight="75vh" overflow="auto">
                                    <Flex marginTop="16px" gap="16px" flexWrap="wrap">
                                        <AnimatePresence>
                                            {packetList
                                                .filter(p => !selectedPackets.some(selectedTitle => selectedTitle == p.title))
                                                .map(p => (
                                                    <motion.button key={p.title}
                                                                   onClick={() => handleAddPacket(p.title)} layout>
                                                        <Packet title={p.title} version={p.version}
                                                                imageUrl="https://via.placeholder.com/116/D8DFFC"
                                                                width="384px"
                                                        />
                                                    </motion.button>
                                                ))}
                                        </AnimatePresence>
                                    </Flex>
                                </ModalBody>
                                <ModalFooter>
                                    <Spacer/>
                                    <Button variant="tertiary" onClick={onPacketsClose}>Fermer</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </HStack>
                    <Flex marginTop="16px" gap="16px" flexWrap="wrap">
                        <AnimatePresence>
                            {packetList
                                .filter(p => selectedPackets.some(selectedTitle => selectedTitle == p.title))
                                .map(p => (
                                    <motion.button key={p.title} onClick={() => handleRemoveSelectedPacket(p.title)}
                                                   layout>
                                        <Packet title={p.title} version={p.version}
                                                imageUrl="https://via.placeholder.com/116/D8DFFC"
                                                width="384px"
                                        />
                                    </motion.button>
                                ))}
                        </AnimatePresence>
                    </Flex>

                    {/* Diffusé à */}
                    <Label htmlFor="sharedWith" label="Diffusé à">
                        <Select name="sharedWith" placeholder="Sélectionner une liste"
                                variant="outline" fontSize="md" bgColor="white" width="250px">
                            <option value='option1'>Établissement</option>
                            <option value='option2'>Tout MarioNUM</option>
                        </Select>
                    </Label>
                    <Spacer/>
                </Block>
                <Block backgroundColor="white" paddingY="16px">
                    <HStack>
                        <Button size="lg" variant="tertiary" color="gray.950">Annuler</Button>
                        <Spacer/>
                        <Button size="lg" variant="primary">Envoyer pour validation</Button>
                    </HStack>
                </Block>
            </VStack>
        </>
    );
};

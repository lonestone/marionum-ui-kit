import {Block, Button, Snapshot, StepProgress, TitleBlock} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {
    Box,
    Flex,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Portal,
    Spacer
} from "@chakra-ui/react";
import {ChangeEventHandler, useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

const snapshotList = [1, 2, 3, 4, 5, 6, 7, 8]

export const TPOrganizeStep2: React.FC = () => {

    const [searchValue, setSearchValue] = useState<string>("")
    const onSearchValueChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
        setSearchValue(evt.target.value);
    };
    const handleSearch = () => {
        console.debug("searching: " + searchValue);
    }
    const handleSort = (sortMode: 'Date' | 'Application' | 'Package') => {
        console.debug("sorting: " + sortMode);
    }
    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={0} handleTabsChange={() => {
            }}/>
            <TitleBlock label="Organiser un TP">
                <Box bgColor="gray.300" h="2.5rem" marginX="16px" w="2px"/>
                <StepProgress
                    flexGrow={1}
                    index={0}
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

            <Block backgroundColor="Marionum.50" paddingY="30px" isContent>
                <InputGroup width="557px" size='md'>
                    <Input
                        pr="7rem"
                        type="text"
                        placeholder="Rechercher un TP par tag, mot clé, etc."
                        value={searchValue}
                        onChange={onSearchValueChange}
                        bgColor="white"
                    />
                    <InputRightElement width="7rem">
                        <Button variant="primary" size="sm" onClick={handleSearch}> Rechercher </Button>
                    </InputRightElement>
                </InputGroup>
                <HStack gap="8px" justifyContent="start" marginTop="16px">
                    <Heading as="h3" fontSize="2xl">Snapshots</Heading>
                    <Box w="1px" h="1.5rem" marginLeft="16px" bgColor="gray.300"/>
                    <Menu>
                        <MenuButton as={Button} variant="lien" color="gray.700" paddingX="16px">
                            Trier
                        </MenuButton>
                        <Portal>
                            <MenuList>
                                <MenuItem onClick={() => handleSort('Date')}>Date</MenuItem>
                                <MenuItem onClick={() => handleSort('Application')}>Application</MenuItem>
                                <MenuItem onClick={() => handleSort('Package')}>Package</MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </HStack>
                <Heading as="h4" fontSize="lg" marginTop="24px">12 snapshots</Heading>
                <Flex gap="24px" flexWrap="wrap" marginTop="16px">
                    {snapshotList.map(s => (
                        <Snapshot key={s} title={"Snapshot n°" + s} date="12/2023" tags={["tag", "+3"]}
                                  description="Ceci est la description du snapshot" onClick={() => {
                        }}/>
                    ))}
                </Flex>
            </Block>
            <Block backgroundColor="white" paddingY="16px" dockBottom>
                <HStack>
                    <Spacer/>
                    <Button size="sm" variant="lien" leftIcon={<ChevronLeftIcon boxSize="1rem"/>}>Précédent</Button>
                    <Button size="sm" variant="lien" rightIcon={<ChevronRightIcon boxSize="1rem"/>}>Suivant</Button>
                </HStack>
            </Block>
        </>
    );
};

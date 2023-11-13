import {Block, Button} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";
import {CircularProgress, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, VStack} from "@chakra-ui/react";
import {IoArchiveOutline} from 'react-icons/io5'
import {MdDeleteOutline} from 'react-icons/md'
import {BiEditAlt} from 'react-icons/bi'
import {PiDotsThreeBold} from 'react-icons/pi'
import {BsCheck} from 'react-icons/bs'

const noop = () => {
};

export const SnapshotTestPage: React.FC = () => {

    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={1} handleTabsChange={noop}/>
            {/* Block pour background et largeur du contenu de la page */}
            <Block backgroundColor="white" paddingY="24px" hasBottomBorder>

                {/* actions */}
                <Flex alignItems="center" gap="16px">
                    <Spacer/>
                    <Button variant="primary" size="lg" flexShrink={0} leftIcon={<BsCheck fontSize="2rem" />}>
                       Valider le test
                    </Button>
                    <Menu>
                        <MenuButton as={Button} aria-label='Options' variant="icon" size="lg">
                            <PiDotsThreeBold size="1.5rem" style={{margin: "0 auto"}}/>
                        </MenuButton>
                        <MenuList>
                            <MenuItem icon={<BiEditAlt size="1.5rem"/>}>Modifier</MenuItem>
                            <MenuItem icon={<IoArchiveOutline size="1.5rem"/>}>Archiver</MenuItem>
                            <MenuItem icon={<MdDeleteOutline size="1.5rem"/>}>Supprimer</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>

                {/* Progress */}
                <VStack alignItems="center" marginY={40}>
                    <CircularProgress
                        thickness='16px'
                        color='Marionum.700'
                        size='160px'
                        value={40}
                    />
                    <Text as="span" fontSize="lg" fontWeight="bold" marginTop="24px">En cours de validation</Text>
                </VStack>
            </Block>
        </>
    );
};

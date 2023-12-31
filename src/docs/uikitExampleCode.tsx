// MyApp/components/HeaderBlock.tsx

// Les composants react de chakra-ui peuvent être utilisés librement
import {Avatar, Flex, Image, Spacer, Text} from "@chakra-ui/react";

// Import des composants et layouts depuis "marionum-ui-kit"
import {Block, NotificationIcon} from "marionum-ui-kit";

// Typage des props du composants
export type HeaderBlockProps = {
    notify?: boolean,
    logoURL: string,
    avatarURL: string,
    accountHref: string,
    homeHref: string,
    handleClickNotif: React.MouseEventHandler<HTMLButtonElement>,
};

// Reférence d'implémentation du composant, à modifier pour ajouter la récupération de données, les interactions, etc.
export const HeaderBlock = ({notify, avatarURL, logoURL, homeHref, accountHref, handleClickNotif}: HeaderBlockProps) => {
    return (
        <Block backgroundColor="Marionum.50" paddingY="30px">
            <Flex alignItems="center">
                <Flex alignItems="center" shrink={0} gap="24px">
                    <a href={homeHref}>
                        <Image h="54px" w="93px" src={logoURL} backgroundColor="#293358" alt="MarioNUM"/>
                    </a>
                    <h1>
                        <Text as="span" fontSize="xs" lineHeight="4" fontWeight="semibold">MarioNUM</Text>
                        <Text as="span" fontSize="xs" lineHeight="4"> de Sorbonne Paris Nord</Text>
                    </h1>
                </Flex>
                <Spacer/>
                <Flex alignItems="center" shrink={0} gap="16px">
                    <button onClick={handleClickNotif}><NotificationIcon boxSize="24px" notify={notify}/></button>
                    <a href={accountHref}><Avatar src={avatarURL}/></a>
                </Flex>
            </Flex>
        </Block>
    );
}
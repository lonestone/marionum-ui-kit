import {Block} from "../../../layouts/Block.tsx";
import {Avatar, Flex, Image, Spacer, Text} from "@chakra-ui/react";
import {NotificationIcon} from "../../../components/NotificationIcon.tsx";

export type HeaderBlockProps = {
    notify?: boolean,
    logoURL: string,
    avatarURL: string,
    accountHref: string,
    homeHref: string,
    handleClickNotif: React.MouseEventHandler<HTMLButtonElement>,
};

export const HeaderBlock = ({notify, avatarURL, logoURL, homeHref, accountHref, handleClickNotif}: HeaderBlockProps) => {
    return (
        <Block backgroundColor="Marionum.50" paddingY="30px">
            <Flex alignItems="center">
                <Flex alignItems="center" shrink={0} gap="24px">
                    <a href={homeHref}>
                        <Image h="54px" w="93px" src={logoURL} backgroundColor="#293358" alt="MarioNUM"/>
                    </a>
                    <h1>
                        <Text fontSize="xs" lineHeight="4" fontWeight="semibold" as="span">MarioNUM</Text>
                        <Text fontSize="xs" lineHeight="4" as="span"> de Sorbonne Paris Nord</Text>
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
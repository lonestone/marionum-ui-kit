import {Block, NotificationIcon} from "marionum-ui-kit";
import {Avatar, Flex, Image, Spacer, Text} from "@chakra-ui/react";
import logoURL from "../../../assets/Placeholder.png";

export type HeaderExampleProps = {
    notify?: boolean,
    logoURL: string,
    avatarURL: string,
    accountHref: string,
    homeHref: string,
    handleClickNotif: React.MouseEventHandler<HTMLButtonElement>,
};

export const exampleHeaderProps: HeaderExampleProps = {
    notify: true,
    logoURL,
    avatarURL: 'https://bit.ly/sage-adebayo',
    accountHref: '#mon-compte',
    homeHref: '#home',
    handleClickNotif: () => {
    }
}

export const HeaderExample = ({notify, avatarURL, logoURL, homeHref, accountHref, handleClickNotif}: HeaderExampleProps) => {
    return (
        <Block backgroundColor="Marionum.50" paddingY="30px" hasBottomBorder>
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
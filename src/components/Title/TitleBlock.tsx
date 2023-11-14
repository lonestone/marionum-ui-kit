import {Block} from "marionum-ui-kit";
import {Flex, Heading} from "@chakra-ui/react";
import {PropsWithChildren} from "react";

export interface TitleBlockProps {
    /**
     * Text to be displayed as title
     */
    label: string

    hideBottomBorder?: boolean
}

export const TitleBlock = ({label, hideBottomBorder, children}: PropsWithChildren<TitleBlockProps>) => {
    return (
        <Block backgroundColor="white" paddingY="24px" hasBottomBorder={!hideBottomBorder}>
            <Flex alignItems="center">
                <Heading size="lg">{label}</Heading>
                {children}
            </Flex>
        </Block>
    );
}



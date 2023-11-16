import {Block} from "marionum-ui-kit";
import {Flex, Heading} from "@chakra-ui/react";
import {PropsWithChildren} from "react";

export interface TitleBlockProps {
    /**
     * Text to be displayed as title
     */
    label: string
}

export const TitleBlock = ({label, children}: PropsWithChildren<TitleBlockProps>) => {
    return (
        <Block backgroundColor="white" paddingY="24px">
            <Flex alignItems="center">
                <Heading size="lg">{label}</Heading>
                {children}
            </Flex>
        </Block>
    );
}



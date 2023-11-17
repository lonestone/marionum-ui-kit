import {Flex, HStack, StackProps} from "@chakra-ui/react";
import {PropsWithChildren} from "react";
import { CalendarIcon } from "./Icons/CalendarIcon";

export const WithCalendar = ({children, ...props}: PropsWithChildren<StackProps>) => {
    return (
        <HStack gap="8px" {...props}>
            <CalendarIcon/>
            <Flex as="span" alignItems="center">{children}</Flex>
        </HStack>
    );
};

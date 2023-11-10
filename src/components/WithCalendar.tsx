import {HStack, StackProps, Text} from "@chakra-ui/react";
import {PropsWithChildren} from "react";
import {CalendarIcon} from "marionum-ui-kit";

export const WithCalendar = ({children, ...props}: PropsWithChildren<StackProps>) => {
    return (
        <HStack gap="8px" {...props}>
            <CalendarIcon/>
            <Text fontSize="xs" fontWeight="600" as="span">{children}</Text>
        </HStack>
    );
};

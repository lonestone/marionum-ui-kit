import {Box, BoxProps, Text} from "@chakra-ui/react";

export interface StepProps extends BoxProps {
    title: string,
    descriptionLeft: string,
    description: string,
    isActive?: boolean
    isActiveOrDone?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Step = ({title, descriptionLeft, description, isActive, isActiveOrDone, ...props}: StepProps) => {
    return (
        <Box borderTop="4px" borderColor={isActiveOrDone ? "Marionum.700" : "gray.200"} paddingTop="8px" {...props}>
            <Text as="div" fontSize="xs" fontWeight="600" color={isActive ? "Marionum.700" : "gray.500"}>{title}</Text>
            <Text as="div" fontSize="2xs">
                <Text as="div" fontSize="xs" lineHeight="4" fontWeight="semibold">{descriptionLeft}</Text>
                <Text as="div" fontSize="xs" lineHeight="4">{description}</Text>
            </Text>
        </Box>
    );
};

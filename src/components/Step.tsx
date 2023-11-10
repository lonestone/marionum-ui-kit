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
            <Text fontSize="xs" fontWeight="600" color={isActive ? "Marionum.700" : "gray.500"}>{title}</Text>
            <Text fontSize="2xs">
                <Text fontSize="xs" lineHeight="4" fontWeight="semibold" as="span">{descriptionLeft}</Text>
                <Text fontSize="xs" lineHeight="4" as="span">{description}</Text>
            </Text>
        </Box>
    );
};

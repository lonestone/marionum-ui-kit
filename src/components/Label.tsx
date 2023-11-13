import {Box, BoxProps, Text} from "@chakra-ui/react";
import {PropsWithChildren} from "react";

export interface LabelProps extends BoxProps {
    label: string
    htmlFor: string
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({label, htmlFor, children, ...props}: PropsWithChildren<LabelProps>) => {
    return (
        <Box as="label" htmlFor={htmlFor} marginTop="24px" display="block"  {...props}>
            <Text as="div" fontSize="md" fontWeight="semibold" color="gray.500" marginBottom="8px">{label}</Text>
            {children}
        </Box>
    );
};

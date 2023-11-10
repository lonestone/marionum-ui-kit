import {StackProps, Text, VStack} from "@chakra-ui/react";
import {QuoteIcon} from "marionum-ui-kit";

export interface CommentProps extends StackProps {
    text: string,
    author: string,
    date: string
}

/**
 * Presentational Card-like component for Comments
 */
export const Comment = ({text, author, date, ...props}: CommentProps) => {
    return (
        <VStack gap="8px" align="start" paddingLeft="32px" borderLeft="1px solid" borderLeftColor="gray.300" {...props}>
            <QuoteIcon boxSize="32px" color="Marionum.700"/>
            <Text fontSize="lg" fontWeight="600">«&nbsp;{text}&nbsp;»</Text>
            <Text fontSize="md" fontWeight="600">{author}</Text>
            <Text fontSize="xs" color="gray.500" marginTop="-8px">{date}</Text>
        </VStack>
    );
};

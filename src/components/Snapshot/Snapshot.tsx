import {Button as ChakraButton, ButtonProps, Flex, Tag, Text} from "@chakra-ui/react";
import {CalendarIcon} from "../Icons/CalendarIcon.tsx";
import {Button} from "../Button/Button.tsx";
import {FiEyeIcon} from "../Icons/FiEyeIcon.tsx";

export interface SnapshotProps extends ButtonProps {
    title: string,
    date: string,
    tags: string[],
    description: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

/**
 * Presentational Card-like component for Snapshots
 */
export const Snapshot = ({title, date, description, tags, onClick, ...props}: SnapshotProps) => {
    return (
        <ChakraButton variant="unstyled" display="block" h="initial" w="280px" borderRadius="8px" border="1px solid"
                      borderColor="Marionum.200" bgColor="white" textAlign="initial" _hover={{bgColor: "Marionum.100"}}
                      p="16px" whiteSpace="initial"
                      onClick={onClick}
                      {...props}>
            <Flex gap="8px">{tags && tags.map((t, i) => <Tag key={i} variant="outline"
                                                             colorScheme="Marionum">{t}</Tag>)}</Flex>
            <Text as="div" fontSize="xs" fontWeight="600" color="Marionum.950" mt="8px">
                <Flex gap="8px"><CalendarIcon style={{display: "inline"}}/>{date}</Flex>
            </Text>
            <Text as="div" fontSize="lg" fontWeight="600" color="Marionum.950" paddingTop="16px">{title}</Text>
            <Text as="div" fontSize="sm" fontWeight="400" noOfLines={2}>{description}</Text>
            <Flex w='100%' justifyContent='end' mt="16px">
                <Button variant="icon" as="div"><FiEyeIcon/></Button>
            </Flex>
        </ChakraButton>

    );
};

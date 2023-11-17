import {Text, useToast, VStack} from "@chakra-ui/react";
import {FiCopy} from "react-icons/fi";
import { Button } from "../Button/Button";

export interface LinkCardProps {
    label: string
    link: string
}

export const LinkCard = ({label, link}: LinkCardProps) => {
    const toast = useToast()

    function copyToClipboard(s: string) {
        navigator.clipboard.writeText(s);
        toast({
            title: 'Copié dans le presse-papier',
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    }

    return (<VStack borderRadius="8px" gap="8px" p="16px" border="1px solid" borderColor="Marionum.200"
                    bgColor="white" position="relative" alignItems="start">
        <Text as="span" fontSize="lg" fontWeight="semibold">{label}</Text>
        <Text as="a" href={link} fontSize="sm" color="Marionum.700">{link}</Text>
        <Button onClick={() => copyToClipboard(link)} variant="icon" position="absolute"
                bottom="4px" right="4px" size="xs" w="24px" h="36px" p="0px">
            <FiCopy size="18px"/>
        </Button>
    </VStack>)
}
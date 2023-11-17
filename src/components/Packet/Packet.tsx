import {Card, CardBody, CardProps, Heading, HStack, Image, Text} from "@chakra-ui/react";
import {CalendarIcon} from "../Icons/CalendarIcon.tsx";

export interface PacketProps extends CardProps {
    imageUrl: string,
    version: string,
    title: string
}

/**
 * Presentational Card-like component for Packets
 */
export const Packet = ({imageUrl, version, title, ...props}: PacketProps) => {
    return (
        <Card
            direction={{base: 'column', sm: 'row'}}
            variant='outline'
            {...props}
        >
            <Image objectFit='cover' w="116px" h="116px" src={imageUrl} alt=""/>
            <CardBody color="Marionum.950" gap="12px" display="flex" flexDirection="column" justifyContent="center" alignItems="start">
                <HStack gap="8px">
                    <CalendarIcon/>
                    <Text as="span" fontSize="xs" fontWeight="600">{version}</Text>
                </HStack>
                <Heading fontSize='2xl'>{title}</Heading>
            </CardBody>
        </Card>
    );
};

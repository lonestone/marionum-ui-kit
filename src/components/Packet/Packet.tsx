import {Card, CardBody, CardProps, Heading, HStack, Image, Stack, Text} from "@chakra-ui/react";
import {CalendarIcon} from "marionum-ui-kit";

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
            <Stack>
                <CardBody color="Marionum.950" gap="12px" display="flex" flexDirection="column" justifyContent="center">
                    <HStack gap="8px">
                        <CalendarIcon/>
                        <Text fontSize="xs" fontWeight="600" as="span">{version}</Text>
                    </HStack>
                    <Heading size='md'>{title}</Heading>
                </CardBody>
            </Stack>
        </Card>
    );
};

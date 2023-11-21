import {CircularProgress, Modal, ModalContent, ModalOverlay, Text, VStack} from "@chakra-ui/react";

export interface FullScreenLoaderProps {
    text: string;
    value: number;
    isOpen: boolean
}

export const FullScreenLoader = ({text, value, isOpen}: FullScreenLoaderProps) => {
    return <Modal isCentered isOpen={isOpen} onClose={() => {
    }}>
        <ModalOverlay bgColor="rgba(255, 255, 255, 0.8)"/>
        <ModalContent w="264px" minH="292px" p="40px">
            <VStack gap="24px">
                <CircularProgress value={value} color="Marionum.700" trackColor="Marionum.300" size='160px'
                                  thickness="12px"/>
                <Text fontSize="lg" fontWeight="bold">{text}</Text>
            </VStack>
        </ModalContent>
    </Modal>
}
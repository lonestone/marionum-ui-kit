import {Center, HStack, Spacer, Text} from "@chakra-ui/react";
import {PropsWithChildren} from "react";
import {Button, ButtonProps} from "./Button/Button";
import {MyMachineIllustration} from "./Illustrations/MyMachineIllustration.tsx";
import {ChevronRightIcon} from "@chakra-ui/icons";

export const MyMachineButton = ({children, ...props}: PropsWithChildren<ButtonProps>) => (
    <Button variant="unstyled" width="100%" borderRadius="6px" bgColor="Marionum.50" height="72px" p="4px 16px" {...props}>
        <HStack alignItems="center" color="Marionum.700">
            <MyMachineIllustration/>
            <Text fontSize="lg" fontWeight="semibold">{children}</Text>
            <Spacer/>
            <Center borderRadius="4px" bgColor="white" w="2.5rem" h="2.5rem"><ChevronRightIcon w="1.5rem" h="1.5rem"/></Center>
        </HStack>
    </Button>
)
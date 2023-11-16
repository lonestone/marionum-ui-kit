import {Alert, AlertProps, Box, Image} from "@chakra-ui/react";
import AlertBackground from "../assets/AlertBackground.svg";
import {PropsWithChildren} from "react";

export const AlertTP = ({children, ...props}: PropsWithChildren<AlertProps>) => (
    <Alert status="info" width="100%" variant="marionum" borderRadius="6px" position="relative" p="0px" {...props}>
        <Image src={AlertBackground} objectFit='cover' position="absolute" w="100%" h="100%" alt=''/>
        <Box p="10px 20px" zIndex={1}>
            {children}
        </Box>
    </Alert>
)
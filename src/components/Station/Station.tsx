import {
    Box,
    BoxProps,
    Circle,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Portal,
    Spacer,
    Stack,
    Text
} from "@chakra-ui/react";
import {PropsWithChildren, ReactNode} from "react";
import {BackgroundProps, BorderProps, ColorProps, LayoutProps} from "@chakra-ui/styled-system";
import {WarningTwoIcon} from "@chakra-ui/icons";
import {FiMoreHorizontal} from "react-icons/fi";
import {Button, StationAnimatorIcon, StationIcon} from "marionum-ui-kit";

export interface StationProps extends BoxProps {
    status: "open" | "connected" | "error" | "unavailable"
    statusText: string
    label: string
    userName: string
    isAnimator?: boolean
}

export interface CardStyle extends BackgroundProps, BorderProps, ColorProps, LayoutProps {

}

export const Station = ({
                            label,
                            userName,
                            status,
                            statusText,
                            isAnimator,
                            ...props
                        }: PropsWithChildren<StationProps>) => {
    let statusIcon: ReactNode | null = null
    let stationIcon: ReactNode | null = null
    const cardStyles: CardStyle = {
        bgColor: "white",
        border: '0px solid',
        borderRadius: '8px'
    }

    const statusStyles: CardStyle = {
        bgColor: "transparent",
        borderRadius: '6px'
    }

    if (isAnimator) {
        props.width = "378px";
        props.height = "207px";
        cardStyles.height = "186px";
        stationIcon = <StationAnimatorIcon position="absolute"
                                           right="30px"
                                           bottom="-16px"
                                           width="189px"
                                           height="216px"/>;
    }
    switch (status) {
        case "open":
            cardStyles.bgColor = "Marionum.50";
            cardStyles.border = "1px dashed"
            cardStyles.borderColor = "Marionum.200"
            statusStyles.color = "gray.500";
            break;
        case "connected":
            statusStyles.bgColor = "green.50";
            statusStyles.color = "green.500";
            statusIcon = <Circle size="8px" bgColor="green.500"/>
            if (stationIcon == null) {
                stationIcon = <StationIcon primaryColor="green.400"
                                           secondaryColor="green.100"
                                           position="absolute"
                                           right="-8px"
                                           bottom="-10px"
                                           width="41px"
                                           height="48px"/>
            }
            break;
        case "error":
            statusStyles.bgColor = "red.50";
            statusStyles.color = "red.500";
            statusIcon = <Circle size="8px" bgColor="red.500"/>
            if (stationIcon == null) {
                stationIcon = <StationIcon primaryColor="red.400"
                                           secondaryColor="red.100"
                                           position="absolute"
                                           right="-8px"
                                           bottom="-10px"
                                           width="41px"
                                           height="48px"/>
            }
            break;
        case "unavailable":
            cardStyles.bgColor = "red.50";
            cardStyles.color = "red.500";
            cardStyles.border = "1px solid"
            cardStyles.borderColor = "red.100"
            statusIcon = <WarningTwoIcon w="16px" ml="-8px"/>
            statusText = ''
            break;

    }

    return (
        <Box width="180px" height="96px" {...props}>
            <Text as="div" fontSize="2xs" fontWeight="500" color="gray.500" marginBottom="4px">{label}</Text>
            {/* Card */}
            <Stack p="16px" gap="4px" pos="relative" {...cardStyles}>
                <HStack>
                    {/*Status*/}
                    <HStack paddingX="8px" gap="6px" height="20px" {...statusStyles}>
                        {statusIcon}
                        <Text as="span" fontSize="xs">{statusText}</Text>
                    </HStack>
                    <Spacer/>
                    <Menu>
                        <MenuButton as={Button} variant="unstyled" color="gray.500" size="2xs" margin="-8px">
                            <FiMoreHorizontal size="1rem" style={{margin: "0 auto"}}/>
                        </MenuButton>
                        <Portal>
                            <MenuList>
                                <MenuItem>Action 1 sur le poste</MenuItem>
                                <MenuItem>Action 2 sur le poste</MenuItem>
                                <MenuItem>Action 3 sur le poste</MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </HStack>
                <Text as="div" height={isAnimator ? '' : '1rem'} fontSize={isAnimator ? 'lg' : 'xs'} fontWeight="bold"
                      lineHeight="1.5rem" paddingRight="24px"
                      noOfLines={isAnimator ? 4 : 1} width="148px"
                      title={userName}>{userName}</Text>
                {stationIcon}
            </Stack>
        </Box>
    );
};

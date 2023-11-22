import type {Meta, StoryObj} from '@storybook/react';

import {AlertTP} from './AlertTP.tsx';
import {
    AlertIcon,
    Badge,
    Box,
    CircularProgress,
    CircularProgressLabel,
    HStack,
    Spacer,
    Stack,
    Text
} from "@chakra-ui/react";
import { Button } from '../Button/Button.tsx';

const meta = {
    title: 'MarioNUM/Components/Stories',
    component: AlertTP,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof AlertTP>;

export default meta;
type Story = StoryObj;

export const AlertTPStory: Story = {
    render: () => {
        return (
            <Box p="32px">
                <AlertTP height="86px">
                    <HStack alignItems="center">
                        <AlertIcon/>
                        <Stack alignItems="start" gap="0px" color="gray.700">
                            <Badge variant="solid" bgColor="Marionum.700" textTransform="uppercase"
                                   fontWeight="bold" fontSize="xs">
                                En cours
                            </Badge>
                            <Text as="span" fontWeight="bold">Nom de la séance</Text>
                        </Stack>
                        <Spacer/>
                        <Text as="span" fontSize="sm" fontWeight="semibold" color="black">Mon TP commence dans</Text>
                        <CircularProgress value={80} color="Marionum.700" trackColor="black" size='54px'>
                            <CircularProgressLabel color="black" fontSize="md" fontWeight="400">
                                1:50
                            </CircularProgressLabel>
                        </CircularProgress>
                        <Button variant="primary" fontSize="md">
                            Rejoindre le TP
                        </Button>
                    </HStack>
                </AlertTP>
            </Box>
        )
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
import type {Meta, StoryObj} from '@storybook/react';

import {ImportListModalExample} from './ImportListModalExample.tsx';
import {Box, useDisclosure} from "@chakra-ui/react";
import {Button} from "marionum-ui-kit";

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: ImportListModalExample,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof ImportListModalExample>;

export default meta;
type Story = StoryObj;

export const ImportListModalExampleStory: Story = {
    render: () => {
        const {isOpen: isImportListOpen, onOpen: onImportListOpen, onClose: onImportListClose} = useDisclosure()

        return <Box p={8}>
            <Button onClick={onImportListOpen}>Ouvrir la modale</Button>
            <ImportListModalExample isOpen={isImportListOpen} onClose={onImportListClose}/>
        </Box>
    },
    args: {}
};

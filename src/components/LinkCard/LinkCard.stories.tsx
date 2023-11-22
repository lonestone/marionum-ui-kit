import type {Meta, StoryObj} from '@storybook/react';

import {LinkCard, LinkCardProps} from './LinkCard.tsx';
import {Box} from "@chakra-ui/react";

const meta = {
    title: 'Marionum/Components/Stories',
    component: LinkCard,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof LinkCard>;

export default meta;
type Story = StoryObj<LinkCardProps>;

export const LinkCardStory: Story = {
    render: ({label, link}) => (
        <Box p="32px">
            <LinkCard label={label} link={link}/>
        </Box>
    ),
    args: {
        label: "Lien étudiant",
        link: "https://somedomain/studentLink?key=12345"
    }
};

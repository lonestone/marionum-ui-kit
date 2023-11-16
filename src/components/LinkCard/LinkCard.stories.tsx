import type {Meta, StoryObj} from '@storybook/react';

import {LinkCard, LinkCardProps} from './LinkCard.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: LinkCard,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof LinkCard>;

export default meta;
type Story = StoryObj<LinkCardProps>;

export const LinkCardStory: Story = {
    args: {
        label: "Lien étudiant",
        link: "https://somedomain/studentLink?key=12345"
    }
};

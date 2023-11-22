import type {Meta, StoryObj} from '@storybook/react';

import {HelpHomePage} from './HelpHomePage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: HelpHomePage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof HelpHomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HelpHomePageStory: Story = {};

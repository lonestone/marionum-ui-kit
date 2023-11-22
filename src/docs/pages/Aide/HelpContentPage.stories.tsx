import type {Meta, StoryObj} from '@storybook/react';

import {HelpContentPage} from './HelpContentPage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: HelpContentPage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof HelpContentPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HelpContentPageStory: Story = {};

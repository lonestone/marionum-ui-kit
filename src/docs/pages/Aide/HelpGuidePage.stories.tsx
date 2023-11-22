import type {Meta, StoryObj} from '@storybook/react';

import {HelpGuidePage} from './HelpGuidePage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: HelpGuidePage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof HelpGuidePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HelpGuidePageStory: Story = {};

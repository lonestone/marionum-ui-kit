import type {Meta, StoryObj} from '@storybook/react';

import {TPAnimatePage} from './TPAnimatePage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: TPAnimatePage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof TPAnimatePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TPAnimatePageStory: Story = {};

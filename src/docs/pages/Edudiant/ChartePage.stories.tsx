import type {Meta, StoryObj} from '@storybook/react';

import {ChartePage} from './ChartePage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: ChartePage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof ChartePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChartePageStory: Story = {};

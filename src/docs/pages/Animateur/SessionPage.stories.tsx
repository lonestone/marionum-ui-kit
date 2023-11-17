import type {Meta, StoryObj} from '@storybook/react';

import {SessionPage} from './SessionPage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: SessionPage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof SessionPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SessionPageStory: Story = {};

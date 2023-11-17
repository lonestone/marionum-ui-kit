import type {Meta, StoryObj} from '@storybook/react';

import {SessionOverPage} from './SessionOverPage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: SessionOverPage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof SessionOverPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SessionOverPageStory: Story = {};

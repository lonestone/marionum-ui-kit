import type {Meta, StoryObj} from '@storybook/react';

import {MyAccountPage} from './MyAccountPage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: MyAccountPage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof MyAccountPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyAccountPageStory: Story = {};

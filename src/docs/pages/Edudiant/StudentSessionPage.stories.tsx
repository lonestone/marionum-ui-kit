import type {Meta, StoryObj} from '@storybook/react';

import {StudentSessionPage} from './StudentSessionPage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: StudentSessionPage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof StudentSessionPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StudentSessionPageStory: Story = {};

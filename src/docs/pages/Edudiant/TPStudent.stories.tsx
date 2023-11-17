import type {Meta, StoryObj} from '@storybook/react';

import {TPStudent} from './TPStudent.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: TPStudent,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof TPStudent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TPStudentPageStory: Story = {};

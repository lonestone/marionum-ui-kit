import type {Meta, StoryObj} from '@storybook/react';

import {TPOrganizeStepResume} from './TPOrganizeStepResume.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: TPOrganizeStepResume,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof TPOrganizeStepResume>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TPOrganizeStepResumeStory: Story = {};

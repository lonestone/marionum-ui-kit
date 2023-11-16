import type {Meta, StoryObj} from '@storybook/react';

import {TPOrganizeStep1} from './TPOrganizeStep1.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: TPOrganizeStep1,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof TPOrganizeStep1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TPOrganizeStep1Story: Story = {};

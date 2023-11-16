import type {Meta, StoryObj} from '@storybook/react';

import {TPOrganizeStep2} from './TPOrganizeStep2.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: TPOrganizeStep2,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof TPOrganizeStep2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TPOrganizeStep2Story: Story = {};

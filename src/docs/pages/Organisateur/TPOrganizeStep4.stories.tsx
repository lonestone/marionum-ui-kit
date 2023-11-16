import type {Meta, StoryObj} from '@storybook/react';

import {TPOrganizeStep4} from './TPOrganizeStep4.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: TPOrganizeStep4,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof TPOrganizeStep4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TPOrganizeStep4Story: Story = {};

import type {Meta, StoryObj} from '@storybook/react';

import {TPOrganizeStep3} from './TPOrganizeStep3.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: TPOrganizeStep3,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof TPOrganizeStep3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TPOrganizeStep3Story: Story = {};

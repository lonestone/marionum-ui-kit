import type {Meta, StoryObj} from '@storybook/react';

import {PermissionsPage} from './PermissionsPage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: PermissionsPage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof PermissionsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PermissionsPageStory: Story = {};

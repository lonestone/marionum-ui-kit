import type {Meta, StoryObj} from '@storybook/react';

import {TPListPage} from './TPListPage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: TPListPage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof TPListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TPListPageStory: Story = {};

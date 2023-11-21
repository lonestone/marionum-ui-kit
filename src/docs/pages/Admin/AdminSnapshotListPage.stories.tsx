import type {Meta, StoryObj} from '@storybook/react';

import {AdminSnapshotListPage} from './AdminSnapshotListPage.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: AdminSnapshotListPage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof AdminSnapshotListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdminSnapshotListPageStory: Story = {};

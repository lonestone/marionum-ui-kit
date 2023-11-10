import type { Meta, StoryObj } from '@storybook/react';

import { SnapshotListPage } from './SnapshotListPage.tsx';

const meta = {
  title: 'MarioNUM/Examples/Stories',
  component: SnapshotListPage,
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof SnapshotListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageListeDeSnapshots: Story = {};

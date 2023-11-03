import type { Meta, StoryObj } from '@storybook/react';

import { SnapshotPage } from './SnapshotPage';

const meta = {
  title: 'MarioNUM/Pages/Snapshot',
  component: SnapshotPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs']
} satisfies Meta<typeof SnapshotPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

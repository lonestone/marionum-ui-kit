import type { Meta, StoryObj } from '@storybook/react';

import { SnapshotNewPage } from './SnapshotNewPage.tsx';

const meta = {
  title: 'MarioNUM/Examples/Stories',
  component: SnapshotNewPage,
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof SnapshotNewPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NouveauSnapshot: Story = {};

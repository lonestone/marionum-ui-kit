import type { Meta, StoryObj } from '@storybook/react';

import { SnapshotTestPage } from './SnapshotTestPage.tsx';

const meta = {
  title: 'MarioNUM/Examples/Stories',
  component: SnapshotTestPage,
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof SnapshotTestPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ValiderLeTestSnapshot: Story = {};

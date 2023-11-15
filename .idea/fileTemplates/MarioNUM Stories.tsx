import type { Meta, StoryObj } from '@storybook/react';

import { ${NAME} } from './${NAME}.tsx';

const meta = {
  title: 'MarioNUM/Examples/Stories',
  component: ${NAME},
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof ${NAME}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ${NAME}Story: Story = {};

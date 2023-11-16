import type {Meta, StoryObj} from '@storybook/react';

import {tpListDataExample, TPListExample} from './TPListExample.tsx';

const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: TPListExample,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof TPListExample>;

export default meta;
type Story = StoryObj;

export const TPListExampleStory: Story = {
    render: () => {
        return <TPListExample tpList={tpListDataExample} sort="asc"/>
    }
};

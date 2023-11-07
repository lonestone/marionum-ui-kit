/* eslint-disable react-hooks/rules-of-hooks */
import type {Meta, StoryObj} from '@storybook/react';

import {useArgs} from '@storybook/preview-api';
import {NavigationBlock, NavigationBlockProps} from "./NavigationBlock.tsx";

const meta = {
    title: 'MarioNUM/Examples/All Stories/Navigation',
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {language: 'tsx'}
        }
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<NavigationBlockProps>;

export const Default: Story = {
    render: ({tabIndex}) => {
        const [, updateArgs] = useArgs();

        function handleTabsChange(i: number) {
            updateArgs({tabIndex: i});
        }

        return <NavigationBlock
            tabIndex={tabIndex}
            handleTabsChange={handleTabsChange}
        />
    }, args: {
        tabIndex: 0
    },
};

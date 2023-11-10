/* eslint-disable react-hooks/rules-of-hooks */
import type {Meta, StoryObj} from '@storybook/react';

import {useArgs} from '@storybook/preview-api';
import {NavigationExample, NavigationBlockProps} from "./NavigationExample.tsx";

const meta = {
    title: 'MarioNUM/Examples/Stories',
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {language: 'tsx'}
        }
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<NavigationBlockProps>;

export const Navigation: Story = {
    render: ({tabIndex}) => {
        const [, updateArgs] = useArgs();

        function handleTabsChange(i: number) {
            updateArgs({tabIndex: i});
        }

        return <NavigationExample
            tabIndex={tabIndex}
            handleTabsChange={handleTabsChange}
        />
    }, args: {
        tabIndex: 0
    },
};

/* eslint-disable react-hooks/rules-of-hooks */
import type {Meta, StoryObj} from '@storybook/react';

import logoURL from "../../../assets/Placeholder.png";
import {useArgs} from '@storybook/preview-api';
import {HeaderBlock, HeaderBlockProps} from "./HeaderBlock.tsx";

const meta = {
    title: 'MarioNUM/Examples/All Stories/Header',
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {language: 'tsx'}
        }
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<HeaderBlockProps>;

export const Default: Story = {
    render: ({notify, avatarURL, logoURL, homeHref, accountHref}) => {
        const [, updateArgs] = useArgs();

        function handleClickNotif() {
            updateArgs({notify: !notify});
        }

        return <HeaderBlock
            notify={notify}
            avatarURL={avatarURL}
            logoURL={logoURL}
            homeHref={homeHref}
            accountHref={accountHref}
            handleClickNotif={handleClickNotif}
        />
    }, args: {
        notify: true,
        logoURL,
        avatarURL: 'https://bit.ly/sage-adebayo',
        accountHref: '#mon-compte',
        homeHref: '#home'
    },
};

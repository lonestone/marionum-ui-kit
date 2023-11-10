/* eslint-disable react-hooks/rules-of-hooks */
import type {Meta, StoryObj} from '@storybook/react';

import logoURL from "../../../assets/Placeholder.png";
import {useArgs} from '@storybook/preview-api';
import {HeaderExample, HeaderExampleProps} from "./HeaderExample.tsx";

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
type Story = StoryObj<HeaderExampleProps>;

export const Header: Story = {
    render: ({notify, avatarURL, logoURL, homeHref, accountHref}) => {
        const [, updateArgs] = useArgs();

        function handleClickNotif() {
            updateArgs({notify: !notify});
        }

        return <HeaderExample
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

/* eslint-disable react-hooks/rules-of-hooks */
import type {Meta, StoryObj} from '@storybook/react';

import {FullScreenLoader, FullScreenLoaderProps} from './FullScreenLoader.tsx';
import {Button, Center} from "@chakra-ui/react";
import {useState} from "react";

const meta = {
    title: 'MarioNUM/Components/Stories',
    component: FullScreenLoader,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof FullScreenLoader>;

export default meta;
type Story = StoryObj<FullScreenLoaderProps>;

export const FullScreenLoaderStory: Story = {
    render: (props) => {
        const [importing, setImporting] = useState<number>(-1)
        const testLoader = () => {
            setImporting(0);
            const intervalTime = 3000 / 100; // 3 secondes divisées par 100 étapes
            const interval = setInterval(() => {
                setImporting((prevValue) => {
                    if (prevValue < 100) {
                        return prevValue + 1;
                    }
                    clearInterval(interval);
                    return prevValue;
                });
            }, intervalTime);
            setTimeout(() => setImporting(-1), 3000 + 1000);
        };

        return (<Center w="100%" h="800px" bgColor="Marionum.300">
            <Button onClick={testLoader}>Test loader</Button>
            <FullScreenLoader isOpen={importing >= 0} value={importing} text={props.text}/>
        </Center>)
    },
    args: {
        text: "Importation en cours",
        isOpen: true,
        value: 70
    }
};

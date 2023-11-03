import type {Meta, StoryObj} from '@storybook/react';

import {HeaderBlockExample} from './HeaderBlockExample';
import {Block} from "../../layouts/Block.tsx";
import {Avatar, Flex, Image, Link, Spacer, Text} from "@chakra-ui/react";
import logo from "../../assets/Placeholder.png";
import {NotificationIcon} from "../../components/NotificationIcon.tsx";

const meta = {
    title: 'MarioNUM/Examples/Header',
    component: HeaderBlockExample,
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {language: 'tsx'}
        }
    },
    tags: ['autodocs']
} satisfies Meta<typeof HeaderBlockExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({notify}) => <Block backgroundColor="Marionum.50" paddingY="30px">
        <Flex alignItems="center">
            <Flex alignItems="center" shrink={0} gap="24px">
                <Link href="#">
                    <Image h="54px" w="93px" src={logo} backgroundColor="#293358" alt="MarioNUM"/>
                </Link>
                <h1>
                    <Text fontSize="xs" lineHeight="4" fontWeight="semibold" as="span">MarioNUM</Text>
                    <Text fontSize="xs" lineHeight="4" as="span"> de Sorbonne Paris Nord</Text>
                </h1>
            </Flex>
            <Spacer/>
            <Flex alignItems="center" shrink={0} gap="16px">
                <button><NotificationIcon boxSize="24px" notify={notify}/></button>
                <button><Avatar src='https://bit.ly/sage-adebayo'/></button>
            </Flex>
        </Flex>
    </Block>,
    args: {
        notify: false
    },
};

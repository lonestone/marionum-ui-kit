import type {Meta, StoryObj} from '@storybook/react';

import {Packet, PacketProps} from './Packet.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Marionum/Components/Stories',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<PacketProps>;

export default meta;
type Story = StoryObj<PacketProps>;

export const PacketStory: Story = {
    render: ({title, version, imageUrl}) => (
        <Packet title={title} version={version} imageUrl={imageUrl} w="384px"/>
    ),
    args: {
        title: "Linux",
        version: "version 1.2",
        imageUrl: "https://via.placeholder.com/116/D8DFFC"
    }
};

import type {Meta, StoryObj} from '@storybook/react';

import {Station, StationProps} from './Station.tsx';
import {HStack} from '@chakra-ui/react';

const meta = {
    title: 'Marionum/Components/Stories',
    component: Station,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof Station>;

export default meta;
type Story = StoryObj<StationProps>;

export const StationStory: Story = {
    render: ({label, userName, ...props}) => {
        return <HStack gap="32px" p="32px" bgColor="Marionum.50">
            <Station label={label + "0"} userName={userName} {...props} status="open" statusText="open"/>
            <Station label={label + "1"} userName={userName} {...props} status="connected" statusText="connected"/>
            <Station label={label + "2"} userName={userName} {...props} status="error" statusText="error"/>
            <Station label={label + "3"} userName="Poste indisponible" {...props} status="unavailable" statusText="unavailable"/>
        </HStack>
    },
    args: {
        label: 'Poste 1',
        userName: 'Samuel Bouchet du N o m T r è s L o n g'
    }
};

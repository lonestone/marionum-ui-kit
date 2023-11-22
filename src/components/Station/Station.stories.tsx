import type {Meta, StoryObj} from '@storybook/react';

import {Station, StationProps} from './Station.tsx';
import {Grid, GridItem} from '@chakra-ui/react';

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
        return <Grid templateColumns='repeat(6, 1fr)' gap="8px" p="32px" bgColor="Marionum.50">
            <GridItem gridColumn="5 / 7" gridRow="1 / 3">
                <Station label={label + "8"} userName={userName} {...props} status="connected" statusText="Connecté"
                         isAnimator/>
            </GridItem>
            <GridItem gridColumn="5 / 7" gridRow="3 / 3">
                <Station label={label + "9"} userName={userName} {...props} status="disconnected"
                         statusText="Déconnecté"
                         isAnimator/>
            </GridItem>
            <Station label={label + "0"} userName={userName} {...props} status="open" statusText="Libre"/>
            <Station label={label + "1"} userName={userName} {...props} status="connected" statusText="Connecté"/>
            <Station label={label + "2"} userName={userName} {...props} status="error" statusText="En erreur"/>
            <Station label={label + "3"} userName={userName} {...props} status="disconnected" statusText="Déconnecté"/>
            <Station label={label + "4"} userName="Poste indisponible" {...props} status="unavailable" statusText=""/>
        </Grid>
    },
    args: {
        label: 'Poste 1',
        userName: 'Samuel Bouchet du N o m T r è s L o n g'
    }
};

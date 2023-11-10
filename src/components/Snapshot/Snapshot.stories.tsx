import type {Meta, StoryObj} from '@storybook/react';

import {Snapshot, SnapshotProps} from './Snapshot.tsx';
import {Flex} from "@chakra-ui/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Marionum/Components/Snapshot',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onClick: {action: 'onClick'},
        date: {control: 'text'},
        tags: { control: 'check', options: ['app1', 'app2', 'pack1', '+4'] }
    },
} satisfies Meta<SnapshotProps>;

export default meta;
type Story = StoryObj<SnapshotProps>;

export const Default: Story = {
    render: ({title, date, description, tags, onClick}) => (
        <Flex gap="16px">
            <Snapshot title={title} date={date} description={description} tags={tags} onClick={onClick}/>
            <Snapshot id="hover" title={title + " :hover"} date={date} description={description} tags={tags}
                      onClick={onClick}/>
        </Flex>
    ),
    parameters: {
        pseudo: {
            hover: ['#hover'],
            rootSelector: 'body'
        }
    },
    args: {
        title: "Nom du snapshot",
        date: "04/2023",
        description: "Ceci est la description du snapshot sur deux lignes maximum. Et si jamais ça dépasse c'est tronqué.",
        tags: ["app1", "app2", "pack1", "+4"]
    }
};

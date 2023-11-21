import type {Meta, StoryObj} from '@storybook/react';
import {SnapshotPage} from "../Preparateur/SnapshotPage.tsx";


const meta = {
    title: 'MarioNUM/Examples/Stories',
    component: SnapshotPage,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof SnapshotPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdminSnapshotPageStory: Story = {
    render:() => <SnapshotPage adminVariant />
};

import type {Meta, StoryObj} from '@storybook/react';

import {Comment, CommentProps} from './Comment.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Marionum/Components/Stories',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<CommentProps>;

export default meta;
type Story = StoryObj<CommentProps>;

export const CommentStory: Story = {
    render: ({text, author, date}) => (
        <Comment text={text} author={author} date={date}/>
    ),
    args: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim cursus at ullamcorper mauris non. Integer aliquam, scelerisque.",
        author: "Super NomDeFamille",
        date: "12/2023"
    }
};

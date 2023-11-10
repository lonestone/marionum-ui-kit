/* eslint-disable react-hooks/rules-of-hooks */
import type {Meta, StoryObj} from '@storybook/react';

import {TitleBlock, TitleBlockProps} from "./TitleBlock.tsx";
import {Box, Spacer} from "@chakra-ui/react";
import {Button, StepProgress, StepProgressProps, TitleSortAndSearch, TitleSortAndSearchProps} from "marionum-ui-kit";

const meta = {
    title: 'MarioNUM/Components/Title',
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {language: 'tsx'}
        }
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<TitleBlockProps & TitleSortAndSearchProps>;

export const Default: Story = {
    render: ({label, placeholderText, onSearch, onSort}) => {
        return <TitleBlock label={label}>
            <TitleSortAndSearch placeholderText={placeholderText} onSearch={onSearch} onSort={onSort}/>
        </TitleBlock>
    }, args: {
        label: "12 Snapshots",
        placeholderText: "Rechercher un TP par tag, mots clés, etc."
    },
    argTypes: {
        onSearch: {action: 'onSearch'},
        onSort: {action: 'onSort'}
    },
};

type StepperStory = StoryObj<TitleBlockProps & StepProgressProps>;

export const WithStepProgress: StepperStory = {
    render: ({label, index, steps}) => {
        return <TitleBlock label={label}>
            <Box w="2px" h="2.5rem" marginX="16px" bgColor="gray.300"/>
            <StepProgress steps={steps} index={index} flexGrow={1}/>
        </TitleBlock>
    }, args: {
        label: "Organize TP",
        index: 0,
        steps: [
            {
                title: "Étape 1",
                descriptionLeft: "Étape suivante : ",
                description: "Sélection du snapshot",
            }, {
                title: "Étape 2",
                descriptionLeft: "Étape suivante : ",
                description: "Planification",
            }, {
                title: "Étape 3",
                descriptionLeft: "Étape suivante : ",
                description: "Résumé du TP",
            },
        ]
    }
};

export const OnlyTitle: Story = {
    render: ({label}) => {
        return <TitleBlock label={label}/>
    }, args: {
        label: "Organize TP"
    }
};

export const WithButton: Story = {
    render: ({label}) => {
        return <TitleBlock label={label}>
            <Spacer/>
            <Button variant="primary" size="lg">+ Organiser un TP</Button>
        </TitleBlock>
    }, args: {
        label: "Travaux pratiques"
    }
};

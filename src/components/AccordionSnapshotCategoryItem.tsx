import {PropsWithChildren} from "react";
import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Heading} from "@chakra-ui/react";
import {Block} from "../layouts";

export interface AccordionSnapshotCategoryItemProps {
    label: string
}

export const AccordionSnapshotCategoryItem = (
    {label, children}: PropsWithChildren<AccordionSnapshotCategoryItemProps>
) => {
    return (
        <AccordionItem>
            <Block backgroundColor="Marionum.50">
                <AccordionButton>
                    <Heading fontSize="2xl" as="h3">
                        {label}
                    </Heading>
                    <AccordionIcon/>
                </AccordionButton>
                <AccordionPanel p={1} pb={4}>{children}</AccordionPanel>
            </Block>
        </AccordionItem>
    )
}
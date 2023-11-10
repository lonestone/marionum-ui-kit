import {Accordion} from "@chakra-ui/react";
import {AccordionSnapshotCategoryItem} from "../../../components/AccordionSnapshotCategoryItem.tsx";


export const AccordionBlock = () => {
    return (
        <Accordion defaultIndex={[0]}>
            <AccordionSnapshotCategoryItem label="Ubuntu">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </AccordionSnapshotCategoryItem>
            <AccordionSnapshotCategoryItem label="Autre racine">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </AccordionSnapshotCategoryItem>
        </Accordion>
    );
}
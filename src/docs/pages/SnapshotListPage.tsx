import {AccordionSnapshotCategoryItem, Snapshot, TitleBlock, TitleSortAndSearch} from "marionum-ui-kit";
import {NavigationExample} from "../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../examples/Header/HeaderExample.tsx";
import {Accordion, Flex} from "@chakra-ui/react";

const snapshotList = [1, 2, 3, 4, 5, 6, 7, 8]

export const SnapshotListPage: React.FC = () => {
    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={0} handleTabsChange={() => {
            }}/>
            <TitleBlock label="12 Snapshots">
                <TitleSortAndSearch
                    onSearch={() => {
                    }}
                    onSort={() => {
                    }}
                    placeholderText="Rechercher un TP par tag, mots clés, etc."
                />
            </TitleBlock>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionSnapshotCategoryItem label="Ubuntu">
                    <Flex gap="24px" flexWrap="wrap">
                        {snapshotList.map(s => (
                            <Snapshot key={s} title={"Snapshot n°" + s} date="12/2023" tags={["tag", "+3"]}
                                      description="Ceci est la description du snapshot" onClick={() => {
                            }}/>
                        ))}
                    </Flex>
                </AccordionSnapshotCategoryItem>
                <AccordionSnapshotCategoryItem label="Autre racine">
                    <Flex gap="24px" flexWrap="wrap">
                        {snapshotList.map(s => (
                            <Snapshot key={s} title={"Snapshot n°" + s} date="12/2023" tags={["tag", "+3"]}
                                      description="Ceci est la description du snapshot" onClick={() => {
                            }}/>
                        ))}
                    </Flex>
                </AccordionSnapshotCategoryItem>
            </Accordion>
        </>
    );
};

import {Box, SpaceProps} from "@chakra-ui/react";
import {ReactNode} from "react";
import {BackgroundProps} from "@chakra-ui/styled-system";

interface BlockProps {
    /**
     * Background color of the block.
     */
    backgroundColor?: BackgroundProps["backgroundColor"];
    /**
     * Vertical padding inside the blocks.
     */
    paddingY?: SpaceProps["paddingY"]
    hasTopBorder?: boolean
    dockBottom?: boolean
    isContent?: boolean
    children?: ReactNode;
}

export const Block = ({backgroundColor, paddingY, hasTopBorder, isContent, dockBottom, children}: BlockProps) => (
    <>
        {dockBottom && <Box height="70px"/>}
        {/* paddingX to avoid content being too close to page border*/}
        <Box w="100%" bg={backgroundColor} paddingX="32px" borderTop={hasTopBorder || dockBottom ? "1px" : "0px"}
             borderColor="Marionum.200"
             position={dockBottom ? 'fixed' : 'initial'} bottom="0px" flexGrow={isContent ? 1 : 0}>
            {/* margin 0 auto to center the content, maxWidth is content expected width */}
            <Box m="0 auto" maxWidth="sizes.content" paddingY={paddingY}>
                {children}
            </Box>
        </Box>
    </>
);
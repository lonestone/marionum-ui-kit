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
    children?: ReactNode;
}

export const Block = ({backgroundColor, paddingY, children}: BlockProps) => (
    // paddingX to avoid content being too close to page border
    <Box w="100%" bg={backgroundColor} paddingX="32px">
        {/* margin 0 auto to center the content, maxWidth is content expected width */}
        <Box m="0 auto" maxWidth="sizes.content" paddingY={paddingY}>
            {children}
        </Box>
    </Box>
);
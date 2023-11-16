import {Flex, FlexProps} from "@chakra-ui/react";
import {Step} from "./Step.tsx";

export interface StepProgressProps extends FlexProps {
    /**
     * Steps text.
     */
    steps: Array<{
        title: string,
        descriptionLeft: string,
        description: string,
    }>;

    /**
     * Active step index.
     */
    index: number
}

export const StepProgress = ({steps, index, ...props}: StepProgressProps) => {
    return <Flex gap="16px" {...props}>
        {steps.map(({title, descriptionLeft, description}, i) => (
            <Step key={i} title={title} descriptionLeft={descriptionLeft} description={description} isActive={index === i}
                  isActiveOrDone={index == i} flex="1 1 0px"/>
        ))}
    </Flex>
}
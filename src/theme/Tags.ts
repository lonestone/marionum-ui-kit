import {tagAnatomy} from '@chakra-ui/anatomy'
import {createMultiStyleConfigHelpers} from '@chakra-ui/react'

const {defineMultiStyleConfig} = createMultiStyleConfigHelpers(tagAnatomy.keys)

export const tagsTheme = defineMultiStyleConfig({
    defaultProps: {
        size: "sm",
        variant: "outline",
        colorScheme: "Marionum",
    }
})
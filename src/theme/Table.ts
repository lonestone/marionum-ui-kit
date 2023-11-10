import {tableAnatomy} from '@chakra-ui/anatomy'
import {createMultiStyleConfigHelpers} from '@chakra-ui/react'

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(tableAnatomy.keys)

const baseStyle = definePartsStyle({
    thead: {
        backgroundColor: 'Marionum.200'
    },
    th: {
        color: 'Marionum.700',
        textColor: 'Marionum.700'
    }
})

const sizes = {
    md: definePartsStyle({
        th: {
            px: "2",
            py: "2",
            lineHeight: "1rem",
            fontSize: "xs",
        },
        td: {
            px: "2",
            py: "14px",
            lineHeight: "1rem",
        }
    }),
}

export const tableTheme = defineMultiStyleConfig({
    baseStyle,
    sizes
})
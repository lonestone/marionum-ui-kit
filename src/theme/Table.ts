import {tableAnatomy} from '@chakra-ui/anatomy'
import {createMultiStyleConfigHelpers} from '@chakra-ui/react'

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(tableAnatomy.keys)

const baseStyle = definePartsStyle({
    table: {
        backgroundColor: 'white'
    },
    thead: {
        backgroundColor: 'Marionum.200'
    },
    th: {
        color: 'Marionum.700',
        textColor: 'Marionum.700',
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
    lg: definePartsStyle({
        th: {
            px: "5",
            py: "3",
            lineHeight: "1rem",
            fontSize: "xs",
            fontWeight: "bold"
        },
        td: {
            px: "5",
            py: "14px",
            lineHeight: "1rem",
            fontSize: "sm",
        }
    }),
}

export const tableTheme = defineMultiStyleConfig({
    baseStyle,
    sizes
})
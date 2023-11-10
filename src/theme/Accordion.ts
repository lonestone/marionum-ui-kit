import {accordionAnatomy} from '@chakra-ui/anatomy'
import {createMultiStyleConfigHelpers} from '@chakra-ui/react'

const {definePartsStyle, defineMultiStyleConfig} =
    createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
    icon: {
        marginLeft: '1.5rem', // change the backgroundColor of the container
    },
    button: {
        padding: '16px'
    },
    container: {
        marginBottom: "14px",
        borderTopWidth: "0px",
        borderColor: "inherit",
        _last: {
            borderBottomWidth: "1px",
        },
    }
})

export const accordionTheme = defineMultiStyleConfig({
    baseStyle,
})
import {alertAnatomy} from '@chakra-ui/anatomy'
import {createMultiStyleConfigHelpers} from '@chakra-ui/react'

const {definePartsStyle, defineMultiStyleConfig} =
    createMultiStyleConfigHelpers(alertAnatomy.keys)


const marionum = definePartsStyle(() => {
    return {
        container: {
            color: 'Marionum.700',
            backgroundColor: 'Marionum.100',
            borderRadius: '6px',
            paddingStart: "3",
            borderStartWidth: "4px",
            borderStartColor: 'Marionum.700',
        },
        icon: {
            color: 'Marionum.700'
        },
        spinner: {
            color: 'Marionum.700'
        },
    }
})

export const alertTheme = defineMultiStyleConfig({
    variants: {marionum: marionum},
})
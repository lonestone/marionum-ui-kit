import {tabsAnatomy} from '@chakra-ui/anatomy'

import {createMultiStyleConfigHelpers} from '@chakra-ui/react'

const {definePartsStyle, defineMultiStyleConfig} =
    createMultiStyleConfigHelpers(tabsAnatomy.keys)

const marionumNavigationVariant = definePartsStyle(() => {
    return {
        tab: {
            textColor: 'gray.500',
            padding: '16px',
            _selected: {
                textColor: 'Marionum.700',
            },
        },
        tablist: {},
        tabpanel: {},
        indicator: {
            marginTop: "-1.5px",
            height: "2px",
            bg: "Marionum.700",
        }
    }
})

const variants = {
    marionumNavigation: marionumNavigationVariant,
}

// export the component theme
export const tabsTheme = defineMultiStyleConfig({variants})
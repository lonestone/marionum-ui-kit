import {defineStyleConfig, extendTheme} from '@chakra-ui/react'
import {tabsTheme} from './Tabs.ts'
import {buttonTheme} from './Button.ts'
import {accordionTheme} from './Accordion.ts'
import {tagsTheme} from './Tags.ts'
import {tableTheme} from './Table.ts'
import {alertTheme} from "./Alert.ts";

const sizes = {
    sizes: {
        content: '1200px'
    },
}

const theme = extendTheme({
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    sizes,
    colors: {
        Marionum: {
            50: "#F4F7FE",
            100: "#EAEDFD",
            200: "#D8DFFC",
            400: "#909CF5",
            500: "#636BEF",
            600: "#4242E5",
            700: "#3430D1",
            800: "#2B28AF",
            950: "#141562",
        }
    },
    components: {
        Alert: alertTheme,
        Tabs: tabsTheme,
        Button: buttonTheme,
        Accordion: accordionTheme,
        Tags: tagsTheme,
        Badge: defineStyleConfig({baseStyle: {textTransform: 'inherit'}}),
        Card: defineStyleConfig({baseStyle: {borderColor: 'Marionum.200'}}),
        Table: tableTheme,
        Text: {
            defaultProps: {
                as: 'div'
            }
        }
    }
})

// as default export
export default theme

// as named export
export {theme}
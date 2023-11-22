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
            300: "#B8C2FA",
            400: "#909CF5",
            500: "#636BEF",
            600: "#4242E5",
            700: "#3430D1",
            800: "#2B28AF",
            900: "#252290",
            950: "#141562",
        }
    },
    components: {
        Alert: alertTheme,
        Tabs: tabsTheme,
        Button: buttonTheme,
        Accordion: accordionTheme,
        Tags: tagsTheme,
        Checkbox: defineStyleConfig({
            baseStyle: {
                control: {
                    bgColor: 'white', width: '20px', height: '20px', _checked: {bgColor: 'Marionum.700'}
                }
            }
        }),
        Badge: defineStyleConfig({baseStyle: {textTransform: 'inherit'}}),
        Card: defineStyleConfig({baseStyle: {borderColor: 'Marionum.200'}}),
        Progress: defineStyleConfig({baseStyle: {filledTrack: {bg: 'Marionum.900'}}}),
        Table: tableTheme,
        Text: {
            defaultProps: {
                as: 'div'
            }
        },
        Breadcrumb: defineStyleConfig({
            baseStyle: {
                link: {
                    "&:not([aria-current=page])": {
                        color: 'gray.500'
                    },
                }
            }
        })
    }
})

// as default export
export default theme

// as named export
export {theme}
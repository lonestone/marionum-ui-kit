import {extendTheme} from '@chakra-ui/react'
import { tabsTheme } from './Tabs.ts'
import { buttonTheme } from './Button.ts'

const sizes = {
    sizes: {
        content: '1200px'
    },
}

const theme = extendTheme({
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
        Tabs: tabsTheme,
        Button: buttonTheme
    }
})

// as default export
export default theme

// as named export
export {theme}
import {extendTheme} from '@chakra-ui/react'
import { tabsTheme } from './theme/Tabs'

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
            200: "#D8DFFC",
            700: "#3430D1",
        }
    },
    components: {
        Tabs: tabsTheme
    }
})

// as default export
export default theme

// as named export
export {theme}
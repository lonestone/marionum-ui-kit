import {extendTheme} from '@chakra-ui/react'

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
    }
})

// as default export
export default theme

// as named export
export {theme}
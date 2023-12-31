import {defineStyle, defineStyleConfig} from '@chakra-ui/react'

const primary = defineStyle({
    bg: 'Marionum.700',
    borderRadius: '6px',
    color: 'white',
    boxSizing: 'content-box',
    _hover: {
        bg: 'Marionum.950',
        _disabled: {
            bg: "Marionum.400",
        }
    },
    _focus: {
        margin: '-3px',
        outline: '3px solid',
        outlineColor: 'Marionum.700',
        outlineOffset: "0px",
        border: '3px solid',
        borderColor: 'Marionum.50'
    },
    _active: {
        bg: 'Marionum.950',
    },
    _disabled: {
        bg: 'Marionum.400',
        opacity: 1,
        color: 'white',
    },
})

const secondary = defineStyle({
    bg: 'Marionum.200',
    borderRadius: '6px',
    color: 'Marionum.700',
    boxSizing: 'content-box',
    _hover: {
        bg: 'Marionum.800',
        color: 'white',
        _disabled: {
            color: 'Marionum.400',
            bg: "Marionum.100",
        }
    },
    _focus: {
        margin: '-3px',
        outline: '3px solid',
        outlineColor: 'Marionum.700',
        outlineOffset: "0px",
        border: '3px solid',
        borderColor: 'Marionum.50'
    },
    _active: {
        bg: 'Marionum.200',
    },
    _disabled: {
        bg: 'Marionum.100',
        color: 'Marionum.400',
        opacity: 1
    },
})

const tertiary = defineStyle({
    bg: 'white',
    border: '1px solid',
    borderColor: 'Marionum.200',
    borderRadius: '6px',
    color: 'Marionum.700',
    boxSizing: 'content-box',
    _hover: {
        bg: 'Marionum.400',
        color: 'white',
        borderColor: 'Marionum.500',
        _disabled: {
            bg: 'white',
            color: 'Marionum.400',
            borderColor: 'Marionum.100'
        }
    },
    _focus: {
        margin: '-2px',
        outline: '3px solid',
        outlineColor: 'Marionum.700',
        outlineOffset: "0px",
        border: '3px solid',
        borderColor: 'Marionum.50'
    },
    _active: {
        bg: 'white',
    },
    _disabled: {
        bg: 'white',
        color: 'Marionum.400',
        borderColor: 'Marionum.100',
        opacity: 1
    },
})

const icon = defineStyle({
    ...secondary,
    bg: 'Marionum.200',
    color: 'Marionum.700',
    aspectRatio: "1 / 1",
    padding: 0
})

const lien = defineStyle({
    ...tertiary,
    bg: 'transparent',
    color: 'Marionum.700',
    border: 0,
    _hover: {
        ...tertiary._hover,
        bg: 'transparent',
        color: 'Marionum.950',
        textDecoration: 'none',
        _disabled: {
            color: 'Marionum.400',
            bg: 'transparent',
        }
    },
    _focus: {
        ...tertiary._focus,
        margin: '-3px',
        bg: 'white',
        color: 'Marionum.700',
    },
    _disabled: {
        ...tertiary._disabled,
        bg: 'transparent',
        color: 'Marionum.400',
    },
})

const warning = defineStyle({
    bg: 'red.500',
    borderRadius: '6px',
    color: 'white',
    boxSizing: 'content-box',
    _hover: {
        bg: 'red.700',
        _disabled: {
            bg: "red.300",
        }
    },
    _focus: {
        margin: '-3px',
        outline: '3px solid',
        outlineColor: 'red.500',
        outlineOffset: "0px",
        border: '3px solid',
        borderColor: 'red.50'
    },
    _active: {
        bg: 'red.950',
    },
    _disabled: {
        bg: 'red.300',
        opacity: 1,
        color: 'white',
    },
})

const sizes = {
    lg: defineStyle({
        h: "48px",
        minW: "48px",
        fontSize: "lg",
        px: "24px",
    }),
    md: defineStyle({
        h: "40px",
        minW: "40px",
        fontSize: "md",
        px: "1rem",
    }),
    sm: defineStyle({
        h: "36px",
        minW: "36px",
        fontSize: "sm",
        px: "1rem",
    }),
    xs: defineStyle({
        h: "36px",
        minW: "36px",
        fontSize: "xs",
        px: "1rem",
    }),
    '2xs': defineStyle({
        h: "32px",
        minW: "32px",
        fontSize: "sm",
        px: "0.625rem",
    }),
    '3xs': defineStyle({
        h: "24px",
        minW: "24px",
        fontSize: "xs",
        px: "0.25rem",
    }),
}

export const buttonTheme = defineStyleConfig({
    variants: {primary, secondary, tertiary, icon, lien, warning},
    sizes,
    defaultProps: {
        variant: "primary",
        size: "lg",
        colorScheme: "Marionum",
    },
})
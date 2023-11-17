import {Button as ChakraButton, ButtonProps as ChakraButtonProps, forwardRef} from '@chakra-ui/react'

import {ReactElement} from "react";

export interface ButtonProps extends ChakraButtonProps {
    /**
     * Apparence du bouton.
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'lien' | 'warning' | 'ghost' | 'unstyled';

    /**
     * Icone à affiche à gauche du texte.
     */
    leftIcon?: ReactElement;

    /**
     * Icone à affiche à droite du texte.
     */
    rightIcon?: ReactElement;

    disabled?: boolean;
}

const sizeByVariant = {
    primary: 'md',
    secondary: 'xs',
    tertiary: 'xs',
    icon: 'lg',
    lien: 'sm',
    warning: 'lg',
    ghost: 'md',
    unstyled: 'md',
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<ButtonProps, typeof ChakraButton>(
    ({variant = 'primary', disabled = false, children, ...props}: ButtonProps, ref) => {
        return (
            <ChakraButton
                variant={variant}
                size={sizeByVariant[variant]}
                isDisabled={disabled}
                {...props}
                ref={ref}
            >
                {children}
            </ChakraButton>
        );
    }
);

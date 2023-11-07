import {Button as ChakraButton} from '@chakra-ui/react'
import {ReactElement} from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Apparence du bouton.
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'link' | 'warning';

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
    link: 'sm',
    warning: 'lg',
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({variant = 'primary', disabled = false, children, ...props}: ButtonProps) => {
    return (
        <ChakraButton
            variant={variant}
            size={sizeByVariant[variant]}
            isDisabled={disabled}
            {...props}
        >
            {children}
        </ChakraButton>
    );
};

import {chakra, useCheckbox, UseCheckboxProps} from "@chakra-ui/react";
import {Button} from "marionum-ui-kit";
import {PropsWithChildren} from "react";

export const ButtonCheckbox = ({children, ...props}: PropsWithChildren<UseCheckboxProps>) => {
    const {state, getInputProps, htmlProps} =
        useCheckbox(props);

    return <>
        <Button as={chakra.label} size="md" cursor='pointer'
                variant={state.isChecked ? "primary" : "secondary"}
                bgColor={state.isChecked ? "Marionum.700" : "Marionum.50"}
                {...htmlProps}>
            <input {...getInputProps()} hidden/>
            {children}
        </Button>

    </>

}
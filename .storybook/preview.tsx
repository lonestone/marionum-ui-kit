import type {Preview} from "@storybook/react";
import {ChakraProvider} from '@chakra-ui/react'
import theme from '../src/theme'
import "./doc.css"

const preview: Preview = {
    decorators: [
        (Story) => (
            <ChakraProvider theme={theme}>
                <Story/>
            </ChakraProvider>
        )
    ],
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        }
    },
};

export default preview;

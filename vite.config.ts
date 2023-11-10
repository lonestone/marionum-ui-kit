import {defineConfig} from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts()],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: [resolve(__dirname, 'src/index.ts')],
            name: 'Marionum UI-Kit',
            fileName: 'marionum-ui-kit',
        },
        rollupOptions: {
            external: ['react', 'react-dom', '@chakra-ui/anatomy', '@chakra-ui/anatomy', '@chakra-ui/react', '@chakra-ui/theme-tools', '@emotion/styled-system', '@emotion/styled', 'framer-motion'],
        },
        minify: "esbuild",
    },
    resolve:{
        alias:{
            "marionum-ui-kit": resolve(__dirname, 'src/index.ts')
        }
    }
})

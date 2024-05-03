import type {Preview} from "@storybook/react";
import '../src/app/globals.css';

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                method: 'alphabetical',
                order: [],
            },
        },
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'light',
                    value: '#f7f7f7',
                },
                {
                    name: 'dark',
                    value: '#333',
                },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;

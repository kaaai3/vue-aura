import {defaultTheme} from "vuepress";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)
export default {
    theme: defaultTheme({
        // sidebar array
        // all pages will use the same sidebar
        sidebar: [
            // SidebarItem
            {
                title: 'Guide',
                text: 'Guide',
                children: [
                    '/guide.md'
                ]
            },
            {
                title: 'Components',
                text: 'Components',
                collapsable: false,
                children: [
                    '/components/input-text.md',
                ]
            },
        ],
    }),
    plugins: [
        registerComponentsPlugin({
            components: {
                InputText: path.resolve(__dirname, '../../src/InputText.vue'),
            },
        }),
    ],
}

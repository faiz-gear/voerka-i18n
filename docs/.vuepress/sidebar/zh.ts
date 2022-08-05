
export const zh = {
    "/zh/guide/": [
        {
            text:"开始",
            prefix:"intro/",
            children:[
                "",
                "install.md",
                "get-started.md",
                "versions.md",
                "support.md",
                "history.md"
            ]
        },
        {
            text:"指南",
            link:false,
            prefix:"use/",
            children:[
                "t",
                "interpolation",
                "datetime",
                "plural",
                "currency",
                "namespace",
                "change-langeuage",
                "vue",
                "react"
            ]
        },
        {
            text:"高级特性",
            prefix:"advanced/",
            children:[
                "runtime",
                "textMap",
                "multi-libs",
                "autoimport",
                "customformatter",
                "langpack",
                "autotranslate",
                "framework",
                "remoteLoad",
                "lngpatch",
                "langedit"
            ]
        },
        {
            text:"工具",
            prefix:"tools/",
            children:[
                "cli",
                "babel", 
                "vue",
                "vite",
            ]
        }
    ],
    "/zh/reference": [
        "i18nscope",
        "voerkai18n",
        "formatters",
        "lang-code"
    ]
}
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./src"],
                    extensions: [
                        ".js",
                        ".jsx",
                        ".ts",
                        ".tsx",
                        ".android.js",
                        ".android.tsx",
                        ".ios.js",
                        ".ios.tsx",
                    ],
                    alias: {
                        "*": ".",
                        "@root": "/src",
                        "@src": "./src",
                        "@assets": "./src/assets",
                        "@components": "./src/components",
                        "@hooks": "./src/hooks",
                        "@modules:": "./src/modules",
                        "@routes": "./src/routes",
                        "@services": "./src/services",
                        "@utils": "./src/utils",
                    },
                },
            ],
        ],
    };
};

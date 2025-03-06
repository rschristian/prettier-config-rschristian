export default {
    trailingComma: "all",
    singleQuote: true,
    printWidth: 100,
    tabWidth: 4,
    arrowParens: "always",
    overrides: [
        {
            files: ["**.css", "**.scss", "**.json", "**.md"],
            options: {
                tabWidth: 2
            }
        }
    ]
}

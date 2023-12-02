// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs
/** @type {import("prettier").Config} */
const config = {
    plugins: ["prettier-plugin-tailwindcss"],
    trailingComma: "all",
    tabWidth: 4,
    useTabs: false,
    singleQuote: true,
};
  
export default config;
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
    theme: {
        extend: {
            minWidth: {
                screen: '100vw', // Replace 'bla' with your desired class name and '20rem' with your desired value
            },
            minHeight: {
                screen: '100vh', // Replace 'bla' with your desired class name and '20rem' with your desired value
            },
        },
    },
    plugins: ['flowbite/plugin'],
};

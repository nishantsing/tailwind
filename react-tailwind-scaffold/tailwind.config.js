/** @type {import('tailwindcss').Config} */
export default {
    // Enable dark mode controlled via class
    darkMode: 'class',

    // Paths to all template files
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],

    theme: {
        extend: {
            // You can extend colors, spacing, fonts here
            colors: {
                primary: '#7c3aed', // example custom color
                secondary: '#f472b6',
            },
        },
    },

    plugins: [
        // Example: you can add forms, typography, or other plugins
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
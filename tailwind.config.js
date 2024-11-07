/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      { pattern: /bg-(dark|light|pink|rose|green|blue|purple)/ },
      { pattern: /text-(dark|light|pink|rose|green|blue|purple)/ },
      { pattern: /border-(dark|light|pink|rose|green|blue|purple)\/30/ },
    ],
    theme: {
      extend: {
        colors: {
          dark: '#141516',
          light: '#CED4E2',
          test: '#FFF',
          pink: '#F472B6',
          rose: '#FB7185',
          blue: '#60a5fa',
          green: '#34d399',
          purple: '#c084fc',
        },
      },
    },
    plugins: [],
  };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{html,js,jsx,ts,tsx}", "./src/App.jsx"],
  theme: {
    extend: {
      colors: {
        'ms-color-1': '#eeeeee',
        'ms-color-2': '#999999',
        'ms-color-3': '#cccccc',
        'ms-color-4': '#bbbbbb',
      },
      maxWidth: {
        '24': '24px',
      },
      minWidth: {
        '24': '24px',
      },
      maxHeight: {
        '24': '24px',
      },
      minHeight: {
        '24': '24px',
      },
    },
  },
  plugins: [],
}


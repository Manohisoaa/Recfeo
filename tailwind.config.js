// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// // tailwind.config.js
// module.exports = {
//   content: [
//     // './src/**/*.{html,js}',
//     'node_modules/preline/dist/*.js',
//   ],
//   plugins: [
//     // require('@tailwindcss/forms'),
//     require('preline/plugin'),
//   ],
// }


// tailwind.config.js (with ESM syntax)
export default {
  content: [
    // './src/**/*.{html,js}',
    'node_modules/preline/dist/*.js',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    // import('@tailwindcss/forms'),
    import('preline/plugin'),
  ],
};
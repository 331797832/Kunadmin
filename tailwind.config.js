/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // 配置了强样式
  important: true,
  theme: {
    extend: {
      colors: {
        'regal-blue': 'rgb(58, 200, 255)',
      },
    }
  },

  plugins: [

  ]
}


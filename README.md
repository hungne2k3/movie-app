# Xây dựng web movie app bằng ReactJS

### 1. Cài đặt ReactJs.
```
npm create vite@latest my-project -- --template react
cd my-project
```
### 2. Cài thư viện `Tailwind CSS`
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
### 3. Cấu hình `tailwind.config.js`
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### 4. `Add the Tailwind directives to your CSS`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 5. Chaỵ câu lệnh
```
npm i
npm run dev
```
# Tailwind + react

## first: npm create vite@latest
## second: 
-> npm install -D tailwindcss postcss autoprefixer
-> npx tailwindcss init -p

## Configure your template paths
```js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

## Add the Tailwind directives to your CSS
```index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## start your build process
-> npm run dev
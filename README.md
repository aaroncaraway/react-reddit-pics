# Reddit r/Pics Browser

## TO SEE:

[LIVE](https://aaroncaraway.github.io/react-reddit-pics/)

### =========================================

### TO RUN:

`npm start`

### TO PUSH LIVE (to gh-pages):

`npm run deploy`

### =========================================

## Wish List

1. Infinite scroll (with pagination, started)
2. "Change sub" can change to any sub (started)
3. Search on mobile (started)
4. Overhaul UX based on feedback
5. Get feedback from:
   1. Mom
   2. Husband
   3. BFF
6. Better styling
   1. Cleaner Modal
   2. Alignment issues
   3. See title on hover
7. Modal instead of reddit on image click
8. Tests

### =========================================

### TO MAKE:

1. npx create-react-app react-reddit-pics
2. npm install -D eslint prettier
3. npx install-peerdeps --dev eslint-config-airbnb
4. npm install -D eslint-config-prettier eslint-plugin-prettier
5. create .eslintrc.json & .prettierrc
6. update settings to `editor.formatOnSave: true`
7. npm i axios uuid

.eslintrc.json

```
{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  },
}
```

.prettierrc

```
{
  "printWidth": 100,
  "singleQuote": true
}
```

### TO HOST ON github pages

[HELP HERE](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

1. npm i gh-pages --save-dev
2. Update package json to include "homepage" and two other options in "scripts"
3. NOTE: On github, in settings, for github pages options, branch is gh-pages
4. npm run deploy

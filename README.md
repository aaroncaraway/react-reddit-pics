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
2. Better styling
   1. Cleaner Modal
   2. Alignment issues
   3. See title on hover
3. Modal instead of reddit on image click
4. ...General refactoring

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

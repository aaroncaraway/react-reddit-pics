# Reddit r/Pics Browser

### TO RUN:

`yarn start`

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

module.exports = {
    "env": {
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [2, 2],
        "quotes": [
            "error",
            "single"
        ],
        "no-unused-vars": ["error", { "vars": "local", "args": "after-used", "ignoreRestSiblings": false}]
    }
};
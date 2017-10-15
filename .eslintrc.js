module.exports = {
    "env": {
        "es6": true
    },
    "extends": "plugin:react/recommended",
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
        "semi": [
            "error",
            "always"
        ],
        "import/prefer-default-export": [0],
        "class-methods-use-this": [0],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/forbid-prop-types":  [1, {"forbid": []}],
        "no-plusplus": [0],
        "no-unused-vars": ["error", { "vars": "local", "args": "after-used", "ignoreRestSiblings": false}]
    },
    "settings": {
        "react": {
          "createClass": "createReactClass", // Regex for Component Factory to use, default to "createReactClass"
          "pragma": "React",  // Pragma to use, default to "React"
          "version": "15.0", // React version, default to the latest React stable release
          "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the propTypes object, such as `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      }
    
};
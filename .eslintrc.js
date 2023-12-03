module.exports = {
  root: true,
  extends: ['@react-native'],  
  rules: {   
    "object-curly-spacing": "off", 
    "prettier/prettier": [
      "error",
      {
        "bracketSpacing": true,
      }
    ],
    'comma-dangle': ['error', 'always-multiline'],
    "@typescript-eslint/object-curly-spacing": "off",
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],    
  },
};

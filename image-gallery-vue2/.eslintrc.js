module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended' // інтеграція Prettier
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 🔹 Не зупиняє збірку через дрібні prettier-помилки
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto' // прибирає ⏎ проблеми між Windows/Linux
      }
    ],

    // 🔹 Дозволяє консоль та дебаг у dev
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 🔹 Можна трохи зменшити суворість TypeScript-ESLint
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn'
  }
};

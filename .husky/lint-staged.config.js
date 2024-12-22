export default {
  // 'src/**/*.{js,ts}': ['eslint --fix', 'prettier --write'],
  // 'src/**/*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],

  'src/**/*.{js,ts,tsx,jsx,vue}': ['eslint --fix', 'prettier --write'],
  'src/**/*.{css,less,vue,html}': ['stylelint --fix'],
  // '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  // 'package.json': ['prettier --write'],
  // '*.md': ['prettier --write'],

  // 'src/**/*.{ts,vue,js,tsx,jsx,json}': ['eslint . --fix', 'npm run lint:prettier'],
};

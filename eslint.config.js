// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "vue/setup-compiler-macros": true
  },
  "globals": {
    "wx": "readonly"
  },
  "extends": [
    "taro/vue3",
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
  "rules": {
    "semi": [
      "error",
      "always"
    ], // 语句结尾不加分号
    "no-console": "warn", // 禁止使用console
    // "no-console": "warn",
    "no-multi-spaces": 2, // 禁止使用多个空格
    "no-multiple-empty-lines": [
      2,
      {
        "max": 2
      }
    ], // 空行最多不能超过2行
    "max-lines": [
      "error",
      600
    ], //限制行数 请勿修改 请优化你的代码
    "complexity": [
      "error",
      12
    ], // 限制复杂度
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "vue/multi-word-component-names": 0, // 关闭组件名必须是多个单词的规则
    "vue/no-v-model-argument": "off",
    "vue/define-macros-order": [
      "error",
      {
        "order": [
          "defineProps",
          "defineEmits"
        ]
      }
    ],
    "vue/order-in-components": [
      "error",
      {
        "order": [
          "el",
          "name",
          "key",
          "parent",
          "functional",
          [
            "delimiters",
            "comments"
          ],
          [
            "components",
            "directives",
            "filters"
          ],
          "extends",
          "mixins",
          [
            "provide",
            "inject"
          ],
          "ROUTER_GUARDS",
          "layout",
          "middleware",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          [
            "props",
            "propsData"
          ],
          "emits",
          "setup",
          "asyncData",
          "data",
          "fetch",
          "head",
          "computed",
          "watch",
          "watchQuery",
          "LIFECYCLE_HOOKS",
          "methods",
          [
            "template",
            "render"
          ],
          "renderError"
        ]
      }
    ]
  }
}

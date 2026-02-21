import { defineConfig, globalIgnores } from "eslint/config"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import prettier from "eslint-config-prettier"

const eslintConfig = defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettier,
  globalIgnores(["dist/**", "src/generated/**"]),
])

export default eslintConfig

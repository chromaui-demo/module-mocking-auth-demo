import path from "node:path";
import { fileURLToPath } from "node:url";

import { coverageConfigDefaults, defineConfig } from "vitest/config";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
  test: {
    coverage: {
      // 👇 Add this
      exclude: [
        ...coverageConfigDefaults.exclude,
        "**/.storybook/**",
        "**/*.stories.*",
        "**/storybook-static/**",
        "**/node_modules/**",
        "next.config.mjs",
        "vitest.config.ts",
        "src/app/account",
        "src/app/api/*",
        "src/app/callback",
        "src/app/actions/*",
        "src/app/layout.tsx",
      ],
    },
    workspace: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
            tags: { exclude: ["experimental"] },
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            name: "chromium",
            provider: "playwright",
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});

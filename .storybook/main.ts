import type { StorybookConfig } from "@storybook/nextjs-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-vitest",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  staticDirs: ["../public"],
  docs: {},
  viteFinal: async (config) => {
    // Ensure CSS is properly processed
    if (!config.css) {
      config.css = {};
    }
    config.css.modules = {
      ...config.css.modules,
      localsConvention: "camelCase",
    };

    return config;
  },
};
export default config;

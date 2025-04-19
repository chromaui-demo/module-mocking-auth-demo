import React from "react";
import { Theme } from "@radix-ui/themes";
import type { Decorator } from "@storybook/react";

export const withTheme: Decorator = (Story) => (
  <Theme>
    <Story />
  </Theme>
);

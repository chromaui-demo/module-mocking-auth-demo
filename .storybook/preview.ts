import type { Preview } from "@storybook/nextjs-vite";
import "@radix-ui/themes/styles.css";
import { withTheme } from "./decorators/withTheme";
import { withLayout } from "./decorators/withLayout";

const preview: Preview = {
  parameters: {
    user: {
      object: "user",
      id: "user_01J808XJ81KB2NDT9F4KWDYR9Z",
      email: "ethriel3695@gmail.com",
      emailVerified: true,
      firstName: "Reuben",
      profilePictureUrl:
        "https://workoscdn.com/images/v1/8STSQXZTLQob5euEiQbp1Oe1jttiuZtMiaWqYKCS2EU",
      lastName: "Ellis",
      createdAt: "2024-06-09T13:41:04.750Z",
      updatedAt: "2024-06-09T13:41:04.750Z",
      lastSignInAt: null,
      externalId: null,
      metadata: {},
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [withTheme, withLayout],
};

export default preview;

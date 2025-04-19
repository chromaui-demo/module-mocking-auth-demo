import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HomePage from "./page";
import { withAuth } from "#src/app/actions/user.mock";

const meta = {
  title: "Example/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["experimental"],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  parameters: {
    user: null,
  },
  beforeEach: () => {
    withAuth.mockReturnValue(
      Promise.resolve({
        user: null,
        sessionId: null,
        accessToken: null,
      })
    );
  },
};

export const LoggedIn: Story = {
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
  },
  beforeEach: () => {
    withAuth.mockReturnValue(
      Promise.resolve({
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
        sessionId: null,
        accessToken: null,
      })
    );
  },
};

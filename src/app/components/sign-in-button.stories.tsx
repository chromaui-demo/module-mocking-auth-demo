import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SignInButton } from "#src/app/components/sign-in-button";

const meta = {
  title: "Components/SignInButton",
  component: SignInButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SignInButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    large: false,
    // user: null,
  },
};

export const Large: Story = {
  args: {
    large: true,
    // user: null,
  },
};

export const LoggedIn: Story = {
  args: {
    large: false,
    // user: {
    //   object: "user",
    //   id: "user_01J808XJ81KB2NDT9F4KWDYR9Z",
    //   email: "ethriel3695@gmail.com",
    //   emailVerified: true,
    //   firstName: "Reuben",
    //   profilePictureUrl:
    //     "https://workoscdn.com/images/v1/8STSQXZTLQob5euEiQbp1Oe1jttiuZtMiaWqYKCS2EU",
    //   lastName: "Ellis",
    //   createdAt: "2024-06-09T13:41:04.750Z",
    //   updatedAt: "2024-06-09T13:41:04.750Z",
    //   lastSignInAt: null,
    //   externalId: null,
    //   metadata: {},
    // },
  },
};

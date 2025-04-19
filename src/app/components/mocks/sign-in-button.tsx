"use client";

/**
 * Example of a client component using the useAuth hook to get the current user session.
 */

import { Button, Flex } from "@radix-ui/themes";
import { fn } from "storybook/test";

export function SignInButton({ large, user }: { large?: boolean; user: any }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    fn(() => (user ? "Sign Out" : "Sign In"))();
  };

  if (user) {
    return (
      <Flex gap="3">
        <Button type="submit" size={large ? "3" : "2"} onClick={handleClick}>
          Sign Out
        </Button>
      </Flex>
    );
  }

  return (
    <Button size={large ? "3" : "2"} onClick={handleClick}>
      Sign In {large && "with AuthKit"}
    </Button>
  );
}

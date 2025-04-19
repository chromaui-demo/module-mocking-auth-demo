import React from "react";
import { Theme, Card, Container, Flex, Button, Box } from "@radix-ui/themes";
import type { Decorator } from "@storybook/react";
import { SignInButton } from "#src/app/components/mocks/sign-in-button";
import { AuthKitProvider, Impersonation } from "#src/app/actions/user.mock";

export const withLayout: Decorator = (Story, context) => {
  const user = context.parameters.user;
  return (
    <Theme
      accentColor="iris"
      panelBackground="solid"
      style={{ backgroundColor: "var(--gray-1)" }}
    >
      <AuthKitProvider>
        <Impersonation />
        <Container style={{ backgroundColor: "var(--gray-1)" }}>
          <Flex direction="column" gap="5" p="5" height="100vh">
            <Box asChild flexGrow="1">
              <Card size="4">
                <Flex direction="column" height="100%">
                  <Flex asChild justify="between">
                    <header>
                      <Flex gap="4">
                        <Button asChild variant="soft">
                          <a href="/">Home</a>
                        </Button>
                        <Button asChild variant="soft">
                          <a href="/account">Account</a>
                        </Button>
                      </Flex>
                      <SignInButton user={user} />
                    </header>
                  </Flex>
                  <Flex flexGrow="1" align="center" justify="center">
                    <main>
                      <Story />
                    </main>
                  </Flex>
                </Flex>
              </Card>
            </Box>
          </Flex>
        </Container>
      </AuthKitProvider>
    </Theme>
  );
};

import NextLink from "next/link";
import { withAuth } from "#src/app/actions/user";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { SignInButton } from "#src/app/components/sign-in-button";

async function getData() {
  const user = await withAuth();
  return { user: user.user };
}

export default async function HomePage() {
  const { user } = await getData();
  return (
    <Flex direction="column" align="center" gap="2">
      {user ? (
        <>
          <Heading size="8">
            Welcome back{user?.firstName && `, ${user?.firstName}`}
          </Heading>
          <Text size="5" color="gray">
            You are now authenticated into the application
          </Text>
          <Flex align="center" gap="3" mt="4">
            <Button asChild size="3" variant="soft">
              <NextLink href="/account">View account</NextLink>
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Heading size="8">AuthKit authentication example</Heading>
          <Text size="5" color="gray" mb="4">
            Sign in to view your account details
          </Text>
          <SignInButton />
        </>
      )}
    </Flex>
  );
}

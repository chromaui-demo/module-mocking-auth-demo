Most of this was pulled from the [AuthKit Next.js example](https://github.com/workos-inc/authkit-nextjs-example) and modified to work with Storybook and module mocking.

# Next.js integration example using AuthKit

An example application demonstrating how to authenticate users with AuthKit and the WorkOS Node SDK.

> Refer to the [User Management](https://workos.com/docs/user-management) documentation for reference.

## Prerequisites

You will need a [WorkOS account](https://dashboard.workos.com/signup).

## Running the example

1. In the [WorkOS dashboard](https://dashboard.workos.com), head to the Redirects tab and create a [sign-in callback redirect](https://workos.com/docs/user-management/1-configure-your-project/configure-a-redirect-uri) for `http://localhost:3000/callback` and set the app homepage URL to `http://localhost:3000`.

2. After creating the redirect URI, navigate to the API keys tab and copy the _Client ID_ and the _Secret Key_. Rename the `.env.local.example` file to `.env.local` and supply your Client ID and API key as environment variables.

3. Additionally, create a cookie password as the private key used to encrypt the session cookie. Copy the output into the environment variable `WORKOS_COOKIE_PASSWORD`.

   It has to be at least 32 characters long. You can use https://1password.com/password-generator/ to generate strong passwords.

4. Verify your `.env.local` file has the following variables filled.

   ```bash
   WORKOS_CLIENT_ID=<YOUR_CLIENT_ID>
   WORKOS_API_KEY=<YOUR_API_SECRET_KEY>
   WORKOS_COOKIE_PASSWORD=<YOUR_COOKIE_PASSWORD>

   NEXT_PUBLIC_WORKOS_REDIRECT_URI=http://localhost:3000/callback
   ```

5. Run the following command and navigate to [http://localhost:3000](http://localhost:3000).

   ```bash
   npm run dev
   ```

## Running Storybook

```bash
npm run storybook
```

### Storybook Module Mocking

This project uses Storybook's module mocking feature to isolate and test AuthKit components in the browser. This approach:

1. **Bypasses Node.js Dependencies**: AuthKit uses Node.js-specific utilities like `crypto` which aren't available in the browser. Module mocking allows us to replace these with browser-compatible alternatives.

2. **Isolates Components**: Components can be tested in isolation without requiring a full Next.js server environment.

3. **Type-Safe Mocks**: Using Storybook's module mocking with TypeScript ensures type safety across the application.

The mocking setup includes:

- Mock implementations of AuthKit's core functions (`withAuth`, `useAuth`, etc.)
- Client-side compatible alternatives for server-side operations
- Type-safe interfaces matching the original AuthKit types

This approach allows for:

- Visual testing of authentication flows
- Component development in isolation
- Browser-based testing without Node.js dependencies

For more details on module mocking, see the [Storybook documentation](https://storybook.js.org/blog/type-safe-module-mocking/).

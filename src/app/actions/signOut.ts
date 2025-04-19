"use server";

import { signOut } from "#src/app/actions/user";

export const handleSignOutAction = async () => {
  await signOut();
};

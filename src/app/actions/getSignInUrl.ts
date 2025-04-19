"use server";

import { getSignInUrl } from "#src/app/actions/user";

export const getSignInUrlAction = async () => {
  return await getSignInUrl();
};

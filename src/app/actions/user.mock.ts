"use server";
import { fn } from "storybook/test";

type User = {
  object: string;
  id: string;
  email: string;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
  createdAt: string;
  updatedAt: string;
  lastSignInAt: string | null;
  externalId: string | null;
  metadata: Record<string, any>;
};

export const withAuth = fn(async () => ({
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
  } as User | null,
  sessionId: null,
  accessToken: null,
})).mockName("withAuth");
export const getSignInUrl = fn(async () => "").mockName("getSignInUrl");
export const signOut = fn(async () => {}).mockName("signOut");
export const getSignUpUrl = fn(async () => {}).mockName("getSignUpUrl");
export const useAuth = fn(() => ({
  user: null as User | null,
  isAuthenticated: false,
  loading: false,
  error: null,
  signIn: () => {},
  signOut: () => {},
})).mockName("useAuth");
export const AuthKitProvider = fn(({ children }: { children: any }) => {
  return children;
}).mockName("AuthKitProvider");

export const Impersonation = fn(() => {
  return null;
}).mockName("Impersonation");

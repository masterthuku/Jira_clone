/* eslint-disable @typescript-eslint/no-unused-vars */
import "server-only";

import {
  Account,
  Client,
  Databases,
  Models,
  Storage,
  type Account as AccountType,
  Databases as DatabaseType,
  Storage as StorageType,
  Users as UserType,
} from "node-appwrite";
import { getCookie } from "hono/cookie";
import { createMiddleware } from "hono/factory";
import { AUTH_COOKIE } from "@/features/auth/constants";

type AdditionalContext = {
  Variables: {
    account: AccountType;
    databases: DatabaseType;
    storage: StorageType;
    users: UserType;
    user: Models.User<Models.Preferences>;
  };
};

export const sessionMiddleware = createMiddleware<AdditionalContext>(async (c, next) => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const session = getCookie(c, AUTH_COOKIE);

  if (!session) {
    // Redirect to sign-in for unauthorized users
    return c.redirect("/sign-in", 302);
  }

  client.setSession(session);

  const account = new Account(client);
  const databases = new Databases(client);
  const storage = new Storage(client);

  try {
    const user = await account.get();

    c.set("account", account);
    c.set("databases", databases);
    c.set("storage", storage);
    c.set("user", user);

    await next();
  } catch (error) {
    console.error("Error fetching user session:", error);
    return c.redirect("/sign-in", 302); // Redirect in case of an error
  }
});


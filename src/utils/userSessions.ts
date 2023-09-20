import { authAccount } from "@config/appwriteConfig";

export async function createUserSession(email: string, password: string) {
  await authAccount.createEmailSession(email, password);
}

export async function getUserAccount() {
  try {
    const userAccount = await authAccount.get();
    return userAccount;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function deleteSession() {
  try {
    await authAccount.deleteSession("current");
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getSession() {
  try {
    const session = await authAccount.getSession("current");
    return session;
  } catch (error: any) {
    throw new Error(error);
  }
}

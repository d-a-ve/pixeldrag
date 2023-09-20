import { Client, Account } from "appwrite";

const appwriteClient = new Client();

appwriteClient
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const authAccount = new Account(appwriteClient);
export default appwriteClient;

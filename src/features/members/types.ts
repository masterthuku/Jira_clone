import { Models } from "node-appwrite";

export enum memberRole {
    ADMIN = "ADMIN",
    MEMBER = "MEMBER",
};

export type Member = Models.Document & {
    workspaceId: string;
    userId: string;
    role: memberRole;
}
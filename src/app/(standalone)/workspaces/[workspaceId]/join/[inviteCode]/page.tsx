/* eslint-disable @typescript-eslint/no-unused-vars */
import { getCurrent } from "@/features/auth/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";
import { redirect } from "next/navigation";
import { WorkspaceIdJoiClient } from "./client";



const WorkspaceJoinPage = async () => {
    const user = await getCurrent();
    if (!user) redirect("/sign-in")

    return ( 
        <WorkspaceIdJoiClient/>
     );
}
 
export default WorkspaceJoinPage;
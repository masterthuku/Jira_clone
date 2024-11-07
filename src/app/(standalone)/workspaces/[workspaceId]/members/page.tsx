/* eslint-disable @typescript-eslint/no-unused-vars */
import { getCurrent } from "@/features/auth/queries";
import { MemberList } from "@/features/workspaces/components/members-list";
import { redirect } from "next/navigation";

const WorkspaceMembersPage = async () => {
    const user = await getCurrent()
    if (!user) redirect("/sign-in")
    return ( 
        <div className="w-full lg:max-w-xl">
            <MemberList/>
        </div>
     );
}
 
export default WorkspaceMembersPage;
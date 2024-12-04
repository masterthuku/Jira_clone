"use client"

import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace"
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspaceId";


export const WorkspaceIdSettingsClient = () => {
    const workspaceId = useWorkspaceId();
    const {data: initialValues, isLoading} = useGetWorkspace({workspaceId});

    if (isLoading) {
        return <PageLoader/>
    }

    if (!initialValues) {
        return <PageError message="Workspace not found" />
    }

    return (
        <div className="w-full lg:max-w-xl">
            <EditWorkspaceForm initialValues={initialValues} />
        </div>
    )
}
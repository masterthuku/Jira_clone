import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/rpc";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<(typeof client.api.workspaces)[":workspaceId"]["reset-invite-code"]["$post"], 200>;
type RequestType = InferRequestType<(typeof client.api.workspaces)[":workspaceId"]["reset-invite-code"]["$post"]>;

export const useResetInviteCode = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const reponse = await client.api.workspaces[":workspaceId"]["reset-invite-code"]["$post"]({ param });

      if (!reponse.ok) {
        throw new Error("Failed to reset workspace invite code");
      }

      return await reponse.json();
    },
    onSuccess: ({data}) => {
      toast.success("Workspace invite code reset");
      router.refresh();
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
      queryClient.invalidateQueries({ queryKey: ["workspace", data.$id] });
    },
    onError: ()=>{
      toast.error("Failed to reset workspace invite code");
    }
  });

  return mutation;
};

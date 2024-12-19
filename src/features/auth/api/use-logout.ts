/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.auth.logout)["$post"]>;

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const reponse = await client.api.auth.logout["$post"]();
      return await reponse.json();
    },
    onSuccess: () => {
      toast.success("Logged out");
      router.refresh();
      queryClient.invalidateQueries();
    },
    onError: () => {
      toast.error("Failed to logout");
    }
  });

  return mutation;
};

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "next/navigation";

export const useTaskId = () => {
    const params = useParams();
    return params.taskId as string
}
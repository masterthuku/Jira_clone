/* eslint-disable @typescript-eslint/no-unused-vars */
import { AlertTriangle } from "lucide-react";

interface PageErrorProps {
    message: string;
}

export const PageError = ({ message }: PageErrorProps) => {
    message = message || "Something went wrong";
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <AlertTriangle className="size-6 text-muted-foreground mb-2" />
            <p className="text-sm font-medium text-muted-foreground">
                {message}
            </p>
        </div>
    )
}
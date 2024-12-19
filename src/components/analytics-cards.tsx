/* eslint-disable @typescript-eslint/no-unused-vars */

import { cn } from "@/lib/utils";
import { Card, CardHeader, CardDescription, CardTitle } from "./ui/card";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
interface AnalyticsCardProps {
  title: string;
  value: number;
  variant: "up" | "down";
  increaseValue: number;
}

export function AnalyticsCard({
  title,
  value,
  variant,
  increaseValue,
}: AnalyticsCardProps) {
  const iconColor = variant === "up" ? "text-emerald-500" : "text-red-500";
  const increaseValueColor =
    variant === "up" ? "text-emerald-500" : "text-red-500";
  const Icon = variant === "up" ? FaCaretUp : FaCaretDown;
  return (
    <Card className="shadow-none border-none w-full">
      <CardHeader>
        <div className="flex items-center gap-x-2.5">
          <CardDescription className="flex items-center gap-x-2 font-medium overflow-hidden">
            <span className="truncate text-base">{title}</span>
          </CardDescription>
          <div className="flex items-center gap-x-1">
            <Icon className={cn(iconColor, "size-4")} />
            <span
              className={cn(
                increaseValueColor,
                "truncate text-base font-medium"
              )}
            >
              {increaseValue}
            </span>
          </div>
        </div>
        <CardTitle className="3xl font-medium">{value}</CardTitle>
      </CardHeader>
    </Card>
  );
}
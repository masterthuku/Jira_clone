/* eslint-disable @typescript-eslint/no-unused-vars */

import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";
import { ScrollArea } from "./ui/scroll-area";
import { AnalyticsCard } from "./analytics-cards";

export const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
      <div className="w-full flex flex-row">
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Total Tasks"
            value={data.taskCount}
            variant={data.taskDiffernce > 0 ? "up" : "down"}
            increaseValue={data.taskDiffernce}
          />
        </div>
      </div>
    </ScrollArea>
  );
};

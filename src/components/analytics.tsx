/* eslint-disable @typescript-eslint/no-unused-vars */

import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { AnalyticsCard } from "./analytics-cards";
import { DottedSeparator } from "./dotted-separator";

export const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
      <div className="w-full flex flex-row">
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Total Tasks"
            value={data.taskCount}
            variant={data.taskDifference > 0 ? "up" : "down"}
            increaseValue={data.taskDifference}
          />
          <DottedSeparator direction="vertical"/>
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Assigned Tasks"
            value={data.assignedTaskCount}
            variant={data.assignedTaskDifference > 0 ? "up" : "down"}
            increaseValue={data.assignedTaskDifference}
          />
          <DottedSeparator direction="vertical"/>
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Completed Tasks"
            value={data.CompletedTaskCount}
            variant={data.CompletedTaskDifference > 0 ? "up" : "down"}
            increaseValue={data.CompletedTaskDifference}
          />
          <DottedSeparator direction="vertical"/>
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Incomplete Tasks"
            value={data.incompleteTaskCount}
            variant={data.incompleteTaskDifference > 0 ? "up" : "down"}
            increaseValue={data.incompleteTaskDifference}
          />
          <DottedSeparator direction="vertical"/>
        </div>
      </div>
      <ScrollBar orientation="horizontal"/>
    </ScrollArea>
  );
};

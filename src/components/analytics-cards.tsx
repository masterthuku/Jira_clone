/* eslint-disable @typescript-eslint/no-unused-vars */
interface AnalyticsCardProps {
    title: string;
    value: string;
    variant: "up" | "down";
    increaseValue: number;
}

export function AnalyticsCard({ title, value, variant, increaseValue }: AnalyticsCardProps) {
    return (
        <div>
            Analytics Card
        </div>
    )
}
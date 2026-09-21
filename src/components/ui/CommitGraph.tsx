import React from "react";
import { cn } from "@/common/lib/utils";
import { ContributionDay } from "@/common/lib/github";

interface CommitGraphProps {
   days: ContributionDay[]
}

export const levelClasses: Record<number, string> = {
   0: "bg-mainDark/10 dark:bg-darkText/10",
   1: "bg-lightGreen/40",
   2: "bg-lightGreen/70",
   3: "bg-lightGreen",
   4: "bg-[#3DA35D]",
};

const buildWeeks = (days: ContributionDay[]) => {
   const weeks: (ContributionDay | null)[][] = [];
   let week: (ContributionDay | null)[] = Array(new Date(days[0].date).getUTCDay()).fill(null);

   days.forEach((day) => {
      week.push(day);
      if (week.length === 7) {
         weeks.push(week);
         week = [];
      }
   });

   if (week.length) {
      while (week.length < 7) week.push(null);
      weeks.push(week);
   }

   return weeks;
};

const CommitGraph = ({ days }: CommitGraphProps) => {
   if (!days.length) return null;

   const weeks = buildWeeks(days);

   return (
      <div className="flex w-full gap-[3px]">
         {weeks.map((week, weekIndex) => (
            <div
               key={`week-${weekIndex}`}
               className={cn(
                  "flex flex-1 flex-col gap-[3px]",
                  weekIndex < weeks.length - 20 && "hidden md:flex"
               )}
            >
               {week.map((day, dayIndex) => (
                  <div
                     key={day?.date ?? `empty-${weekIndex}-${dayIndex}`}
                     title={day ? `${day.count} contributions on ${day.date}` : undefined}
                     className={cn(
                        "aspect-square w-full rounded-[2px]",
                        day ? levelClasses[day.level] ?? levelClasses[4] : "bg-transparent"
                     )}
                  />
               ))}
            </div>
         ))}
      </div>
   );
};

export default CommitGraph;

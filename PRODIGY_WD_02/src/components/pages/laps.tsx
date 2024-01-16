import { cn, getFormattedTimeWithUnit } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

const Laps = ({ laps }: { laps: number[] }) => {
  return (
    <ScrollArea className="lg:h-full w-full min-w-full min-h-full mb-12 md:min-w-0">
      <div className="shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] rounded-lg border border-muted lg:max-h-full min-w-full flex flex-col w-80 max-h-[350px]">
        <div
          className={cn(
            "underline uppercase text-lg md:text-2xl grid grid-cols-3 gap-2 py-3 px-6 w-full",
            laps.length === 0 ? "" : "bg-muted"
          )}
        >
          <span className="text-start font-bold">Time</span>
          <span className="text-center font-bold">Total</span>
          <span className="text-end font-bold">Lap</span>
        </div>
        {laps.map((lap, index) => {
          return (
            <div
              key={index}
              className={cn(
                "text-base md:text-lg grid grid-cols-3 gap-2 pb-3 px-6",
                index % 2 === 0 ? "bg-gray-300" : "bg-gray-200"
              )}
            >
              <span className="text-start">{laps.length - index}</span>
              <span className="text-center">
                +{getFormattedTimeWithUnit(lap - laps[index + 1] || 0)}
              </span>
              <span className="text-end">{getFormattedTimeWithUnit(lap)}</span>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};
export default Laps;

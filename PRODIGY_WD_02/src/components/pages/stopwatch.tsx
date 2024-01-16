import { IFormattedTime, cn } from "@/lib/utils";

const Stopwatch = ({ time }: { time: IFormattedTime }) => {
  return (
    <div className="flex gap-2  sm:gap-4 items-center justify-center">
      <Card time={time.hours} />
      <Colon />
      <Card time={time.minutes} />
      <Colon />
      <Card time={time.seconds} />
    </div>
  );
};
export default Stopwatch;

const Card = ({ time, className }: { time: number; className?: string }) => {
  // Format the time as two digits with leading zeros
  const formattedTime = time.toString().padStart(2, "0");

  return (
    <div
      className={cn(
        "tabular-nums w-14 sm:w-24 md:w-36 text-center bg-background shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] text-foreground p-2 md:p-6 text-3xl sm:text-6xl md:text-9xl rounded-md font-teko",
        className
      )}
    >
      {formattedTime}
    </div>
  );
};

const Colon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("text-foreground text-lg sm:text-4xl md:text-6xl font-teko", className)}>
      :
    </span>
  );
};

import {  useState } from "react";
import Stopwatch from "./stopwatch";
import Controllers from "./controllers";
import { getFormattedTime } from "@/lib/utils";
import Laps from "./laps";

const StopwatchPage = () => {
  const [time, setTime] = useState(0);
  const [flags, setFlags] = useState<number[]>([]);
  const [intervalVariable, setIntervalVariable] =
    useState<NodeJS.Timeout | null>(null);

  const Timer = {
    start: () => {
      if (intervalVariable) return;
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setIntervalVariable(interval);
    },

    reset: () => {
      if (intervalVariable) return;
      setTime(0);
      setFlags([]);
    },

    pause: () => {
      if (!intervalVariable) return;
      clearInterval(intervalVariable);
      setIntervalVariable(null);
    },

    flag: () => {
      setFlags((prev) => [time, ...prev]);
    },
  };

  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 lg:flex-row lg:gap-16 lx:gap-32 font-teko p-4 md:p-12 lg:h-[473.6px]">
      <div className="flex flex-col gap-8 items-center justify-center md:p-8 md:py-12 p-4 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] border border-muted">
        <Stopwatch time={getFormattedTime(time)} />
        <Controllers Timer={Timer} interval={intervalVariable} time={time} />
      </div>
      <Laps laps={flags} />
    </main>
  );
};
export default StopwatchPage;

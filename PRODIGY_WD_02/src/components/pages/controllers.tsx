import { cn } from "@/lib/utils";
import { FlagTriangleRight, Pause, Play, RotateCcw } from "lucide-react";
import { useState } from "react";

const Controllers = ({
  Timer,
  time,
  interval,
}: {
  Timer: any;
  time: number;
  interval: NodeJS.Timeout | null;
}) => {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="flex gap-2">
      {!interval && time === 0 ? (
        <Button
          onClick={() => {
            Timer.start();
            setIsPaused(false);
          }}
        >
          <Play />
        </Button>
      ) : (
        <>
          <Button disabled={interval !== null} onClick={Timer.reset}>
            <RotateCcw />
          </Button>
          {isPaused ? (
            <Button
              onClick={() => {
                Timer.start();
                setIsPaused(false);
              }}
            >
              <Play />
            </Button>
          ) : (
            <Button
              onClick={() => {
                Timer.pause();
                setIsPaused(true);
              }}
            >
              <Pause />
            </Button>
          )}
          <Button disabled={interval === null} onClick={Timer.flag}>
            <FlagTriangleRight />
          </Button>
        </>
      )}
    </div>
  );
};
export default Controllers;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "bg-background disabled:opacity-40 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] text-foreground p-2 md:p-4 text-3xl rounded-xl font-teko hover:bg-gray-200 transition-all ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

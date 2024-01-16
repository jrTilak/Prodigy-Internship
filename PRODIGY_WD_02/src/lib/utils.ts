import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormattedTime(time: number) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time - hours * 3600 - minutes * 60;
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

export function getFormattedTimeWithUnit(time: number) {
  const formattedTime = getFormattedTime(time);
  return `${formattedTime.hours}:${formattedTime.minutes}:${formattedTime.seconds}`;
}

export interface IFormattedTime {
  hours: number;
  minutes: number;
  seconds: number;
}

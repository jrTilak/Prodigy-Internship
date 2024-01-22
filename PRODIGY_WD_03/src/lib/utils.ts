import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createUsername(name: string) {
  return name.replace(/[\s.]/g, "").toLowerCase();
}

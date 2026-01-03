import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFirstSearchParam(
  params: { [key: string]: string | string[] | undefined },
  key: string
): string | undefined {
  const t = params[key];
  if (Array.isArray(t)) {
    return t[0];
  }
  return t;
}

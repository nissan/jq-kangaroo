import { isFrameworkEnabled } from "../config/ui";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getComponentClasses(
  framework: "daisyui" | "shadcn" | "magic",
  baseClasses: string,
  frameworkClasses: string,
): string {
  if (!isFrameworkEnabled(framework)) {
    return baseClasses;
  }
  return cn(baseClasses, frameworkClasses);
}

// ShadCN UI specific utilities
export const shadcn = {
  button:
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  input:
    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  card: "rounded-xl border bg-card text-card-foreground shadow",
  // Add more component classes as needed
};

// DaisyUI specific utilities
export const daisyui = {
  button: "btn",
  input: "input input-bordered",
  card: "card",
  // Add more component classes as needed
};

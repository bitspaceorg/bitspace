export const isTeaser = process.env.isTeaser || false;
export const API_HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:6969';

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const isTeaser = process.env.isTeaser || false;
export const API_HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:6969';

export const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_ID || '';

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

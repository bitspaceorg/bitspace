export const isTeaser = process.env.isTeaser || false;
export const API_HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:6969';
export const EVENTS_DATA_URL = "https://raw.githubusercontent.com/BharathSanjeeviT/express-backend-template/main/events-data.json"

export const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_ID || '';

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

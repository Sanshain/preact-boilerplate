import { signal } from "@preact/signals";

/// works like valtio's proxy state managment

export const globalCount = signal(10);  
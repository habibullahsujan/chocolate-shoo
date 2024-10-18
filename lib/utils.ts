import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



export function generateOrderId(orderId: number) {
  let orderCounter =orderId
  const timestamp = Date.now().toString().slice(-4); // Get the last 4 digits of the current timestamp
  orderCounter = (orderCounter + 1) % 10000; // Reset counter if it reaches 10000
  const paddedCounter = orderCounter.toString().padStart(4, "0"); // Ensure the counter is always 4 digits
  return `#${timestamp}${paddedCounter}`;
}
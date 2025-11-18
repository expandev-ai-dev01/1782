import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @utility cn
 * @summary Merges Tailwind CSS classes safely
 * @param {...ClassValue[]} inputs - Class names to merge
 * @returns {string} Merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

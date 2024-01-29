import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Record } from '@prisma/client';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const findLatestRecord = (records: Record[] | undefined): Record | undefined => {
  if(!records){
    return undefined
  }

  const last = records[records.length - 1];
  return last;
}
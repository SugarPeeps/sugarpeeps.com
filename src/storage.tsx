"use server"

import { getStore } from "@netlify/blobs";

export const save = async (store: string, key: string, value: any): Promise<void> => {
  const blob = getStore(store);
  await blob.set(key, value);
}

export const load = async (store: string, key: string): Promise<string> => {
  const blob = getStore(store);
  return blob.get(key);
}
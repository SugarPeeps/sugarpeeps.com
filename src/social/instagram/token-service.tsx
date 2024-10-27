"use server"

import { load, save } from "../../storage";
import { TokenData } from "./types";

const storeKey: string = "instagram";
const accessTokenKey: string = "accessToken";
const tokenTypeKey: string = "tokenType";
const expiresAtKey: string = "expiresAt";

const getTokenFromStorage = async (): Promise<TokenData> => {
  const accessToken = await load(storeKey, accessTokenKey);
  const tokenType = await load(storeKey, tokenTypeKey);
  const expiresAt = await load(storeKey, expiresAtKey);
  return {
    accessToken,
    tokenType,
    expiresAt,
  }
}

const saveTokenToStorage = async (token: TokenData): Promise<void> => {
  await save(storeKey, accessTokenKey, token.accessToken);
  await save(storeKey, tokenTypeKey, token.tokenType);
  await save(storeKey, expiresAtKey, token.expiresAt);
}
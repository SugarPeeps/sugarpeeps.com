"use server"

import { PostData, FeedData, ApiProviderAction} from "../types";
import { TokenData } from "./types";

const apiBaseUrl: string = "https://api.instagram.com/v1";

const getAccessToken = async (): Promise<TokenData> => {
    return null;
}

const refreshAccessToken = async (): Promise<TokenData> => {
    return null;
}

const getInstagramPosts: ApiProviderAction = async (): Promise<PostData[]> => {
    return [];
}
export default getInstagramPosts;

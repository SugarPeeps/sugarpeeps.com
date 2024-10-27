export type ApiProviderAction = () => Promise<FeedData>;

export type PostData = {
  imageUrl: string;
  permalinkUrl: string;
}

export type FeedData = PostData[]

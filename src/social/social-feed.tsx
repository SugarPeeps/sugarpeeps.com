"use client"

import React, { useEffect, useState } from "react";

import { ApiProviderAction, PostData, FeedData } from "./types";

type PostProps = {
  post: PostData,
  [key: string]: any
}

const SocialPost = ({ post, ...props }: PostProps): React.ReactNode => {
  return (
    <div {...props}>
      <a href={post.permalinkUrl} target="_blank">
        <img src={post.imageUrl} alt="" />
      </a>
    </div>
  )
}

type FeedProps = {
  apiProviderAction: ApiProviderAction,
  [key: string]: any
}

export const SocialFeed = ({ apiProviderAction, ...props }: FeedProps): React.ReactNode => {
  const [posts, setPosts] = useState([] as FeedData)

  useEffect(() => {
    apiProviderAction().then(setPosts)
  }, []);

  return (
    <div {...props}>
      {posts && posts.map((post, i) => (
        <SocialPost key={i} post={post} />
      ))}
    </div>
  )
}


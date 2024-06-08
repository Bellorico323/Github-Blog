import { useContext } from "react";
import { PostContext } from "../contexts/PostsContext";

export function usePosts() {
  const context = useContext(PostContext)

  if(!context) {
    throw new Error('usePosts must be used within a PostsProvider')
  }

  return context
}
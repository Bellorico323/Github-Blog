import { useContext } from "react";
import { PostContext } from "../contexts/PostsContext";

export function usePosts() {

  return useContext(PostContext)
}
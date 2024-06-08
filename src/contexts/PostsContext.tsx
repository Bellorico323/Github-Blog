import { ReactNode, createContext,  useEffect, useState } from "react";
import { searchApi } from "../lib/axios";

export interface PostProps {
  body: string
  title: string
  created_at: string
  number: number
}

interface PostProviderProps {
  children: ReactNode
}

interface PostContextType {
  posts: PostProps[]
  getPosts: (query: string) => Promise<void> 
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({children}: PostProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([])

  async function getPosts(query?: string) {
    const params: {q?: string} = {}

    if(query) {
      params.q = `repo:Bellorico323/Github-Blog ${query}`
    } else {
      params.q = `repo:Bellorico323/Github-Blog is:issue`
    }

    const response = await searchApi.get('/search/issues', {
      params,
    })
    setPosts(response.data.items)
  }

  useEffect(() => {
    getPosts()
  },[]) 


  return (
    <PostContext.Provider
      value={{
        posts,
        getPosts
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

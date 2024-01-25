import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface PostProps {
  body: string
  title: string
  created_at: Date
  number: number
}


export interface PostPage extends PostProps {
  comments: number
  login: string
  user: {
    html_url: string
    login: string
  }
}

interface PostProviderProps {
  children: ReactNode
}

interface PostContextType {
  data: PostPage
  posts: PostProps[]
  fetchSelectedIssue: (query: string | undefined) => Promise<void>
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({children}: PostProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [data, setData] = useState({} as PostPage)

  async function getPosts() {
    const response = await api.get(`issues`)
    setPosts(response.data)
  }


  async function fetchSelectedIssue(query: string | undefined) {
    const response = await api.get(`issues/${query}`, {
      params: {
        q: query
      }
    })
    setData(response.data)
  }

  useEffect(() => {
    getPosts()
  },[]) 


  return (
    <PostContext.Provider
      value={{
        posts,
        fetchSelectedIssue,
        data
      }}
    >
      {children}
    </PostContext.Provider>
  )
}
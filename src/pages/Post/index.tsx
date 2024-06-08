import { useEffect, useState } from "react"
import { PostInfo } from "./PostInfo"
import { Content } from "./style"
import Markdown from 'react-markdown'
import { api } from "../../lib/axios"
import { useParams } from "react-router-dom"

export interface Post {
  title: string
  created_at: string
  comments: number
  body: string
  user: {
    login: string
    html_url: string
  }
}

export function Post() {
  const { number } = useParams();
  const [post, setPost] = useState<Post>()


  async function fetchSelectedIssue(query: string | undefined) {
    const response = await api.get<Post>(`issues/${query}`, {
      params: {
        q: query
      }
    })
    console.log(response.data)
    setPost(response.data)
  }

  useEffect(() => {
    fetchSelectedIssue(number)
  }, [number])

  return (
    <div>
      {post ? (<PostInfo post = {post}/> ) : <></>}
       
      <Content>
        <Markdown>
          {post?.body}
        </Markdown>
      </Content>
    </div>
  )
}
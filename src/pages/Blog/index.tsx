import { useEffect, useState } from "react";
import { Profile } from "../../components/Profile";
import { SearchForm } from "./SearchForm";
import { BlogContainer, Post, PostsGrid } from "./styles";
import { formatDistanceToNow } from "date-fns";
import {ptBR} from 'date-fns/locale/pt-BR';

interface PostsProps {
  body: string
  title: string
  created_at: Date
  id: number
}

export function Blog() {
  const [Posts, setPosts] = useState<PostsProps[]>([])

  async function getPosts() {
    const data = await fetch('https://api.github.com/search/issues?q=repo:Bellorico323/Github-Blog').then((response) => {
      return response.json()
    })
    setPosts(data.items)
  }

  useEffect(() => {
    getPosts()
  },[]) 


  return (
    <div>
      <Profile />

      <BlogContainer>
        <SearchForm />

        <PostsGrid>
          {Posts.map((post) => {
            return (
              <Post key={post.id}>
              <header>
                <h2>{post.title}</h2>
                <span>{formatDistanceToNow(post.created_at, {
                  locale: ptBR,
                  addSuffix: true,
                })}</span>
              </header>
                <p>{post.body}</p>
              </Post>
            )
          })}
        </PostsGrid>
      </BlogContainer>
    </div>
  )
} 
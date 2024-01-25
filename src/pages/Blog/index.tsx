import { Profile } from "../../components/Profile";
import { SearchForm } from "./SearchForm";
import { BlogContainer, Post, PostsGrid } from "./styles";
import { formatDistanceToNow } from "date-fns";
import {ptBR} from 'date-fns/locale/pt-BR';
import { usePosts } from "../../hooks/usePosts";
import { Link } from "react-router-dom";


export function Blog() {
  const { posts } = usePosts()

  return (
    <div>
      <Profile />

      <BlogContainer>
        <SearchForm />

        <PostsGrid>
          {posts.map((post) => {
            return (
              <Post key={post.number}>
                <Link to={`/post/${post.number}`}>
              <header>
                <h2>{post.title}</h2>
                <span>{formatDistanceToNow(post.created_at, {
                  locale: ptBR,
                  addSuffix: true,
                })}</span>
              </header>
                <p>{post.body}</p>
                </Link>
              </Post>
            )
          })}
        </PostsGrid>
      </BlogContainer>
    </div>
  )
} 

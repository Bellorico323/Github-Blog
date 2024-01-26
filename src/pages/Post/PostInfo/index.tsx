import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProfileContainer } from "../../../components/Profile/styles"
import { PostCard, PostCardTitle, PostDetails } from "./styles"
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

interface PostProps {
  post: {
    title: string
    created_at: string
    comments: number
    body: string
    user: {
      login: string
      html_url: string
    }
  }
}

export function PostInfo({post}: PostProps) {

  return (
 <ProfileContainer>
    <PostCard>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft}/>
          VOLTAR
          </Link>
        <Link to={post.user.html_url} target="_blank">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
        </Link>
      </header> 

      <PostCardTitle>
        <h1>{post.title}</h1>
        <div>
        <PostDetails>
            <FontAwesomeIcon icon={faGithub} />
            {post.user.login ? post.user.login : 'dado nao carrega'}
          </PostDetails>

          <PostDetails> 
            <FontAwesomeIcon icon={faCalendarDay} />

              {(post.created_at) ?    (
              formatDistanceToNow(post.created_at, {
              addSuffix: true,
              locale: ptBR
            }) ) : 'bugado'} 
         
          </PostDetails>  

          <PostDetails>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} comentários
          </PostDetails>  
          </div>
      </PostCardTitle>
    </PostCard>
 </ProfileContainer>
 )
}
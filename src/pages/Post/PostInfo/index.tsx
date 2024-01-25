import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProfileContainer } from "../../../components/Profile/styles"
import { PostCard, PostCardTitle, PostDetails } from "./styles"
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link, useParams } from "react-router-dom"
import { usePosts } from "../../../hooks/usePosts"
import { useEffect } from "react"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

export function PostInfo() {
  const {data, fetchSelectedIssue} = usePosts()

  const { number } = useParams();

useEffect(() => {
  fetchSelectedIssue(number)
}, [])

if (data && data.created_at){
  const ConvertToDate = new Date(data.created_at)
  console.log(ConvertToDate)
}

  return (
 <ProfileContainer>
    <PostCard>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft}/>
          VOLTAR
          </Link>
        <Link to="/" target="_blank">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
        </Link>
      </header> 

      <PostCardTitle>
        <h1>{data.title}</h1>
        <div>
        <PostDetails>
            <FontAwesomeIcon icon={faGithub} />
            {data.login ? data.login : 'dado nao carrega'}
          </PostDetails>

          <PostDetails> 
            <FontAwesomeIcon icon={faCalendarDay} />

              {(data && data.created_at) ?    (
              formatDistanceToNow(data.created_at, {
              addSuffix: true,
              locale: ptBR
            }) ) : 'bugado'} 
         
          </PostDetails>  

          <PostDetails>
            <FontAwesomeIcon icon={faComment} />
            {data.comments} comentários
          </PostDetails>  
          </div>
      </PostCardTitle>
    </PostCard>
 </ProfileContainer>
 )
}
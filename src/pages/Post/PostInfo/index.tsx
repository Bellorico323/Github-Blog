import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProfileContainer } from "../../../components/Profile/styles"
import { PostCard, PostCardTitle, PostDetails } from "./styles"
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

export function PostInfo() {
  return (
 <ProfileContainer>
    <PostCard>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft}/>
          VOLTAR
          </Link>
        <Link to="https://reactrouter.com/en/main/components/link">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
        </Link>
      </header> 

      <PostCardTitle>
        <h1>JavaScript data types and data structures</h1>
        <div>
        <PostDetails>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </PostDetails>

          <PostDetails> 
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </PostDetails>  

          <PostDetails>
            <FontAwesomeIcon icon={faComment} />
            32 comentários
          </PostDetails>  
          </div>
      </PostCardTitle>
    </PostCard>
 </ProfileContainer>
 )
}
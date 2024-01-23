import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardContent, CardDetails, ProfileCard, ProfileContainer } from "../../components/Profile/styles";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

export function Profile() {

  return (
    <ProfileContainer>
      <ProfileCard>
       <img src="https://github.com/Bellorico323.png" alt="Profile photo" />
       <CardContent>
        <header>
          <h2>Murillo Orico</h2>
          <Link to="https://reactrouter.com/en/main/components/link" target="_blank">
            GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </Link>
        </header>
        <div>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscist. Nunc, volutpat pulvinar vel mass.</p>
        </div>
        <footer>
          
          <CardDetails>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </CardDetails>

          <CardDetails>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </CardDetails>  

          <CardDetails>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </CardDetails>  

        </footer>
       </CardContent>
      </ProfileCard>
    </ProfileContainer>
  )
}
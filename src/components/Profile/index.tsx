import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardContent, CardDetails, ProfileCard, ProfileContainer } from "../../components/Profile/styles";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface ProfileProps {
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: string
  avatar_url: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)


  async function UserProfileData() {
    const data = await fetch('https://api.github.com/users/Bellorico323').then((response) => {
      return response.json()
    })
    setProfile(data)
  }

  useEffect(() => {
    UserProfileData()
  },[])


  return (
    <ProfileContainer>
      <ProfileCard>
       <img src={profile.avatar_url} alt="Profile photo" />
       <CardContent>
        <header>
          <h2>{profile.name}</h2>
          <Link to={profile.html_url} target="_blank">
            GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </Link>
        </header>
        <div>
          <p>{profile.bio}</p>
        </div>
        <footer>
          
          <CardDetails>
            <FontAwesomeIcon icon={faGithub} />
            {profile.login}
          </CardDetails>

          <CardDetails>
            <FontAwesomeIcon icon={faBuilding} />
            {profile.company}
          </CardDetails>  

          <CardDetails>
            <FontAwesomeIcon icon={faUserGroup} />
            {profile.followers}
          </CardDetails>  

        </footer>
       </CardContent>
      </ProfileCard>
    </ProfileContainer>
  )
}
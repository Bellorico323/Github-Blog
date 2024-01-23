import { HeaderContainer, ImageBackground } from "./styles";
import logoBlog from '../../assets/logo.svg'

export function Header() {

  return (
    <HeaderContainer>
      <ImageBackground src="src/assets/Cover.png" alt="" />
      <img src={logoBlog} alt="" id="logo"/>
    </HeaderContainer>
  )
}
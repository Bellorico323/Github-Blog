import { HeaderContainer, ImageBackground } from "./styles";
import logoBlog from '../../assets/logo.svg'

import Image from '../../assets/Cover.png'

export function Header() {

  return (
    <HeaderContainer>
      <ImageBackground src={Image} alt="" />
      <img src={logoBlog} alt="" id="logo"/>
    </HeaderContainer>
  )
}
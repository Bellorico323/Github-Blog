import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;
  margin: 0 auto;
  position: relative;
  
  display: flex;
  justify-content: center;

  #logo {
    height: 98px;
    width: 148px;
    margin-top: 4rem;
  }

`
export const ImageBackground = styled.img`
    width: 100%;  
    height: 296px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
`
import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  margin-top: -5.75rem;
`;

export const ProfileCard = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);


  background: ${props => props.theme['base-profile']};
  padding: 2rem 2.25rem;
  border-radius: 10px;


  > img {
    width: 148px;   
    height: 148px;   
    border-radius: 8px;
  }
  @media(max-width: 1440px) {
    max-width: 864px;
  }

`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  width: 100%;
  z-index: 1;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;  

    >h2 {
      ${mixins.fonts.titleL};
      margin-top: 8px;
      color: ${props => props.theme['base-title']};
    }

    > a {
      color: ${props => props.theme['blue']};
      ${mixins.fonts.link}
      padding: 5px;
      cursor: pointer;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }
  > footer {
      margin-top: 1.5rem;

      display: flex;
      align-items: center;
      gap: 1.25rem;
    }
`

export const CardDetails = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    color: ${props => props.theme['base-label']};
  }
  color: ${props => props.theme['base-subtitle']};
`
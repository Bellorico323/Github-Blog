import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const PostCard = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem 2.25rem;
  border-radius: 10px;
  background: ${props => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  display: flex;
  flex-direction: column;
 
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;


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
`;

export const PostCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  z-index: 99;


  > h2 {
      ${mixins.fonts.titleL};
      color: ${props => props.theme['base-title']};
    }
  
  > div {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;
  }
`;

export const PostDetails = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    color: ${props => props.theme['base-label']};
  }
  color: ${props => props.theme['base-subtitle']};
`
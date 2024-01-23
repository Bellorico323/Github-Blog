import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 4.5rem auto  0;

`;

export const PostsGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;

margin-top: 3rem;
`;

export const Post = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme['base-post']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid transparent;
  transition: border-color 0.4s ease;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;


    > h2 {
      ${mixins.fonts.titleM}
      color: ${props => props.theme['base-title']};
      width: 283px; 
    }

    > span {
      ${mixins.fonts.textS}
      color: ${props => props.theme['base-span']};
      align-self: self-start;
      margin-top: 6px;
    }
  }

  p {
    width: 100%;
    ${mixins.fonts.textM};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; 
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:hover {
    border: 2px solid ${props => props.theme['base-label']};
  }
`
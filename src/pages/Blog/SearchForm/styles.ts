import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mixins.fonts.titleS};
    margin-bottom: 0.75rem;

    > span {
      ${mixins.fonts.textS};
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    flex: 1;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
  `
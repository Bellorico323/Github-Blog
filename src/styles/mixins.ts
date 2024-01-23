import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleL: css`
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
    `,
     titleM: css`
     font-family: 'Nunito', sans-serif;
     font-size: 1.25rem;
     font-weight: bold;
     line-height: 1.6;
     `,
      titleS: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.125rem;
      font-weight: bold;
      line-height: 1.6;
      `,
       textM: css`
       font-family: 'Nunito', sans-serif;
       font-size: 1rem;
       font-weight: 400;
       line-height: 1.6;
       `,
       textS: css`
       font-family: 'Nunito', sans-serif;
       font-size: 0.875rem;
       font-weight: 400;
       line-height: 1.6;
       `,
        link: css`
        font-family: 'Nunito', sans-serif;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.6;
        `
  }
}
import { css } from 'styled-components';

export const pc = (props: any) => {
  return css`
    @media only screen and (min-width: 801px) {
      ${props}
    }
  `;
};

export const resposive = (props: any, width: number) => {
  return css`
    @media only screen and (max-width: ${width}px) {
      ${props}
    }
  `;
};

export const mobile = (props: any) => {
  return css`
    @media only screen and (max-width: 800px) {
      ${props}
    }
  `;
};

export const XsMobile = (props: any) => {
  return css`
    @media only screen and (max-width: 300px) {
      ${props}
    }
  `;
};

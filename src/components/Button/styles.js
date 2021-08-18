import styled, { css } from 'styled-components'

const colors = (disabled) => ({
  default: css`
    background-image: linear-gradient(to right, #CE1A35, #FD5A41);
    border: 0.15rem solid #FD5A41;

    ${!disabled && css`    
      &:hover {
        background-image: linear-gradient(to right, #FD5A41, #FD5A41);
      }
  
      &:active {
        background-image: linear-gradient(to right, #CE1A35, #CE1A35);
      }
    `}
  `,
  danger: css`
    background-image: linear-gradient(to right, #c5021f, #fd3553);
    border: 0.15rem solid #ff9292;

    ${!disabled && css`
      &:hover {
        background-image: linear-gradient(to right, #c5021f, #c5021f);
      }

      &:active {
        background-image: linear-gradient(to right, #fd3553, #fd3553);
      }
    `}
  `,
  success: css`
    background-image: linear-gradient(to right, #128649, #1ace6e);
    border: 0.15rem solid #70ffb1;

    ${!disabled && css`
      &:hover {
        background-image: linear-gradient(to right, #128649, #128649);
      }

      &:active {
        background-image: linear-gradient(to right, #1ace6e, #1ace6e);
      }
    `}
  `
})

const sizes = {
  small: css`
    padding: 0.6rem 1.4rem;
    font-size: 1.2rem;
  `,
  default: css`
    padding: 1.5rem 2rem;
    font-size: 1.6rem;
  `
}

export const Btn = styled.button`
  ${({ center, fullWidth, disabled, color, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 30rem;
    margin: ${center ? '0 auto' : '0' };
    width: ${fullWidth ? '100%' : 'fit-content'};
    border-radius: 0.8rem;
    color: #fff;
    outline: none;
    box-shadow: 0 0.3rem 1rem rgba(26, 45, 90, 0.52);
    cursor: pointer;
    
    ${colors(disabled)[color]}
    ${sizes[size]}
  
    ${disabled ? css`
      opacity: 0.5;
    ` : css`
      &:focus {
        border: 0.15rem solid #fff;
      }
    `}
  `}
`

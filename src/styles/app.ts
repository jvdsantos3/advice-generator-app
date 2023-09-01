import { styled } from 'styled-components'

export const Attribution = styled.div`
  width: 100%;
  text-align: center;
  margin: 1rem auto;
  position: absolute;
  bottom: 0;
  font-size: 0.75rem;

  a {
    color: ${({ theme }) => theme.colors['neon-green']};
    text-decoration: none;
  }
`

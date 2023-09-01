import { styled } from 'styled-components'

import dividerMobile from '../../assets/pattern-divider-mobile.svg'
import dividerDesktop from '../../assets/pattern-divider-desktop.svg'

export const AdviceContainer = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AdviceBox = styled.div`
  padding: 2.5rem 1.5rem 0;
  background: ${({ theme }) => theme.colors.box};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
    padding: 3rem 3rem 0;
  }
`

export const AdviceBoxTexts = styled.div`
  width: 18.4375rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors['neon-green']};
    font-size: 0.6875rem;
    letter-spacing: 0.2160625rem;
  }

  h1 {
    font-size: 1.5rem;
    letter-spacing: -0.0160625rem;
  }

  @media (min-width: 768px) {
    width: 27.75rem;
    gap: 0;

    span {
      font-size: 0.8125rem;
      letter-spacing: 0.255375rem;
    }

    h1 {
      font-size: 1.5rem;
      letter-spacing: -0.0160625rem;
      margin: 1.5rem 0 2.5rem;
    }
  }
`

export const AdviceDivider = styled.span`
  width: 100%;
  height: 1rem;
  background: url(${dividerMobile}) no-repeat;
  background-position: center;

  @media (min-width: 768px) {
    background: url(${dividerDesktop}) no-repeat;
  }
`

export const AdviceDiceButton = styled.button`
  width: 4rem;
  height: 4rem;
  margin-bottom: -2rem;
  background: ${({ theme }) => theme.colors['neon-green']};
  border: 0;
  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0px 0px 2.5rem ${({ theme }) => theme.colors['neon-green']};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.text};
    box-shadow: 0px 0px 0rem;
  }
`

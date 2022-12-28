import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 1.5rem;

  background-color: ${props => props.theme.colors.darkerBlue};
  color: ${props => props.theme.colors.white};

  h1 {
    font-size: 2.4rem;
    font-style: italic;
    font-weight: 500;
  }
`
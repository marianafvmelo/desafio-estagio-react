/* eslint-disable prettier/prettier */
import styled from "styled-components"

export const LayoutContainer = styled.div`

`
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 27rem 1fr;
  height: calc(100vh - 6rem);
`
export const MainContainer = styled.div`
  background: ${((props) => props.theme.colors.lightGray)};
  
  main {
    background: ${((props) => props.theme.colors.white)};
    
  }
`


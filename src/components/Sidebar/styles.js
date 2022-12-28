import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-image: linear-gradient(to bottom, ${((props) => props.theme.colors.darkBlue)}, ${((props) => props.theme.colors.mediumBlue)}, ${((props) => props.theme.colors.lightBlue)});

  nav {
    margin-top: .5rem;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }

    a {
      text-decoration: none;
      display: inline-block;
      width: 100%;
      padding: 1.4rem 0 1.4rem 1rem;

      background: ${((props) => props.theme.colors.darkerBlue)};
      color: ${((props) => props.theme.colors.white)};

      transition: box-shadow 0.3s ease;

      &:hover, &.active {
        box-shadow: inset 3px 0 0 0 ${(props) => props.theme.colors.white}
      }
    }
  }
`
import styled, { css } from 'styled-components'
import { flex, breakpoints } from './theme'

const MobileMenuIcon = styled.div`
  display: none;
  @media ${breakpoints[0]}  {
    display: ${props => props.show ? 'none' : 'inline-block'};
    z-index: 10;
    font-family: ${props => props.theme.fontStyles.logoFont};
    cursor: pointer;
    
    i {
      font-size: ${props => props.theme.fontSizing.m};
    }

    ${props => 
      props.main &&
      css`
        text-align: center;
    `}

    a {
      ${flex('column', 'flex-end', 'center')};
    }
  }    
`

export default MobileMenuIcon
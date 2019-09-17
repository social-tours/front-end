import styled from 'styled-components'
import { flex, breakpoints } from './theme'

const CloseIconMobile = styled.div`
    display: none;
    @media ${breakpoints[0]} {
      z-index: 10;
      display: ${props => !props.show ? 'none' : 'inline-block'};
      font-family: ${props => props.theme.fontStyles.logoFont};
      cursor: pointer;

      i {
          font-size: ${props => props.theme.fontSizing.m};
      }

      a {
        ${flex('column', 'flex-end', 'center')};
      }
    }
`

export default CloseIconMobile
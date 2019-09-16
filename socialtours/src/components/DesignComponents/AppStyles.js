import styled from 'styled-components'
import { flex } from './theme'

const AppContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  ${flex('column','center','center')};
  margin: 0 auto;
`

export default AppContainer
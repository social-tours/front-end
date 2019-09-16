import styled from 'styled-components'
import { color, colorScheme, fontSizing, flex, breakpoints } from '../DesignComponents/theme'

export const FormContainer = styled.div`
  width: 600px;
  ${flex('column', 'center', 'center')};
  margin: 50px auto;
  border-radius: 5px;
  border: 1px solid ${colorScheme.secondaryBorderColor}
  // box-shadow:  10px 10px 5px 0px rgba(0,0,0,0.75);
  background: ${color.lightText};
  font-size: ${fontSizing.sm};

  @media ${breakpoints[0]} {
    width: 100%;
    font-size ${fontSizing.sm};
  }

  .windowFrame {
    width: 100%;
    margin: 0;
    padding: 10px;
    border-radius: 5px 5px 0 0;
    background: linear-gradient(to top, #cccccc 0%, #d6d6d6 1px, #ebebeb 100%);

    @media ${breakpoints[0]} {
      padding: 5px;
    }
  }  

  form {
    width: 90%;
    ${flex('column', 'center')};
    padding: 20px;


    @media ${breakpoints[0]} {
      width: 100%;
    }

    & *  {
      margin: 10px 0;
    }

    input {
      width: 80%;
      padding: 10px;
      border: 1px solid ${colorScheme.secondaryBorderColor};
      // background: ${color.primaryBgShading};     
      line-height: 1rem;
    }

    button {
      width: 150px;
    }
  }
`
export default FormContainer
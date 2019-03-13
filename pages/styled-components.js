import styled, { css } from 'styled-components'

const size = {
   small: 320,
   medium: 960,
   large: 1280
 }
 
 const above = Object.keys(size).reduce((acc,items) => {
   acc[items] = (...args) => css`
      @media (min-width: ${size[items]}px){
         ${css(...args)}
      }
   `
   return acc;
 }, {})

const Button = styled.button`
   ${above.small`
      background: red;
   `}
   ${above.medium`
      background: yellow;
   `}
   ${above.large`
      background: blue;
   `}
`

export default () => (
   <Button>styled-components</Button>
)
import React from 'react'
import styled from 'styled-components'

import background from './background.svg'

const Background: React.FC = (props) => {
  const { children } = props;
  return(
  <StyledBackground style={{backgroundColor: '#141B23'}}> 
    {children}
  </StyledBackground>

  )
}

export default Background

const StyledBackground = styled.div`
background-image: url(${background});
`

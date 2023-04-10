import React from 'react'
import styled from 'styled-components'
import Banner from '../../features/Banner'
import Navbar from '../Navbar'

const HeaderWrapper = styled.header`
    
`


const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar />
    </HeaderWrapper>
  )
}

export default Header
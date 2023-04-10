import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../Container/Container'
import logo from '../../assets/images/Logo.svg'
import { navLinks } from '../../routes'
import search from '../../assets/images/search.svg'


const Nav = styled.nav`
    background: rgba(20, 20, 20, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 99;
    @media(max-width: 768px) {
        padding: 15px 0;
    }
`

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
   & > svg {
        display: none;
    }
    
    @media(max-width: 768px) {
        & > svg {
            display: block;
        }
    }
`

const NavList = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 30px;
    
    & > svg {
        display: none;
    }
    @media(max-width: 768px) {
        position: fixed;
        top: 0;
        left: ${({openMenu}) => openMenu ? '0' : '-100%'};
        background: rgba(0,0,0, 0.8);
        height: 100vh;
        flex-direction: column;
        max-width: 350px;
        width: 100%;
        transition: 0.5s;
        
        & > svg {
        display: block;
        position: absolute;
        right: 20px;
        top: 10px;
    }
    }
`

const NavListItem = styled.li``

const NavLinks = styled(NavLink)`
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    line-height: 21px;
    font-family: 'Raleway-Bold';
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 34px 0;
    position: relative;
    ::after {
        content: '';
        background: #149A03;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        display: none;
        position: absolute;
        bottom: 10px;
    }
    &.active::after {
        display: block;
    }
    
    &.active {
        color: #FFFFFF;
    }
    
    svg {
        fill-opacity: 0.6;
    }
    
    &.active svg {
       fill-opacity: 1;
    }
`


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)


    const handleOpenMenu = () => {
        setOpenMenu(true)
    }
    
    const handleCloseMenu = () => {
        setOpenMenu(false)
    }

    return (
        <Nav>
            <Container>
                <NavWrapper>
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <NavList openMenu={openMenu}>
                        <svg onClick={handleCloseMenu} style={{ color: 'white' }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z"></path><path d="M10 8.872l5.639-5.638a.797.797 0 011.127 1.127L11.128 10l5.638 5.639a.797.797 0 11-1.127 1.127L10 11.128l-5.639 5.638a.797.797 0 11-1.127-1.127L8.872 10 3.234 4.361A.797.797 0 014.36 3.234L10 8.872z" fill="currentColor" fill-rule="nonzero"></path></g></svg>
                        {navLinks.map(link => (
                            <NavListItem key={link.url}>
                                <NavLinks to={link.url}>{link.title}</NavLinks>
                            </NavListItem>
                        ))}
                        <NavListItem>
                            <NavLinks to={'/search'}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 22.5C14.7187 22.4995 16.8735 21.7568 18.6213 20.39L24.1162 25.885L25.8838 24.1175L20.3888 18.6225C21.7563 16.8746 22.4995 14.7193 22.5 12.5C22.5 6.98625 18.0137 2.5 12.5 2.5C6.98625 2.5 2.5 6.98625 2.5 12.5C2.5 18.0137 6.98625 22.5 12.5 22.5ZM12.5 5C16.6363 5 20 8.36375 20 12.5C20 16.6363 16.6363 20 12.5 20C8.36375 20 5 16.6363 5 12.5C5 8.36375 8.36375 5 12.5 5Z" fill="white" />
                                </svg>
                            </NavLinks>
                        </NavListItem>
                    </NavList>
                    <svg onClick={handleOpenMenu} viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><path d="M0-3h20v20H0z"></path><g fill="#FFF"><rect width="20" height="2" rx="1"></rect><rect y="6" width="18" height="2" rx="1"></rect><rect stroke="#FFF" x="0.5" y="12.5" width="13" height="1" rx="0.5"></rect></g></g></svg>
                </NavWrapper>
            </Container>
        </Nav>
    )
}

export default Navbar
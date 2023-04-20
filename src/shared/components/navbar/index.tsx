import React from 'react'
import tw, { styled } from 'twin.macro'

const NavbarContainer = styled.nav`
    height: 100px;
    position: fixed;
    color: #fff;
    ${tw`
        w-screen
        bg-black
        flex
        items-center
        justify-center
    `}
`

const NavbarContent = styled.div`
    ${tw`container`}
`

export const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarContent>
            Navbar
            ...
        </NavbarContent>
    </NavbarContainer>
  )
}

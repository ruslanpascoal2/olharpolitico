import React from 'react'
import tw, { styled } from 'twin.macro'

const NavbarContainer = styled.nav`
    height: 100px;
    position: fixed;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-gray-darker);
    color: var(--color-text);
    font-size: 42px;
    ${tw`
        w-screen
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
        </NavbarContent>
    </NavbarContainer>
  )
}

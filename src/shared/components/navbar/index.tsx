import { EyeOutlined } from "@ant-design/icons";
import React from "react";
import tw, { styled } from "twin.macro";

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
`;

const NavbarContent = styled.div`
  ${tw`container`}
  div {
    display: flex;
    align-items: center;
    color: var(--color-green);
    h1 {
      margin-left: 0.25rem;
      font-size: 18px;
      color: var(--color-text);
      font-family: 'Archivo-Bold', sans-serif;
    }
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <div>
          <EyeOutlined />
          <h1>Olhar Político</h1>
        </div>
      </NavbarContent>
    </NavbarContainer>
  );
};

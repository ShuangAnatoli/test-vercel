
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  margin-right: 10px;
`;

const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const SignInButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

export const Navigation = () => {
  return (
    <NavbarContainer>
      <Logo>Class</Logo>
      <NavbarList>
        <NavbarItem>
          <NavbarLink href="/">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/about">About</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/services">Services</NavbarLink>
        </NavbarItem>
      </NavbarList>
      <SignInButton>Sign In</SignInButton>
    </NavbarContainer>
    
  );
}

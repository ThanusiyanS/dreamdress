import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";

const Header = () => {
  return (
    <Container
      style={{ height: "12vh", width: "100%", backgroundColor: "#FF7ED4" }}
    >
      <Grid style={{ flex: 0.1 }}>
        <h1>Logo</h1>
      </Grid>
      <Grid style={{ flex: 0.8 }}>
        <NavBar>
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link>About</Link>
          </NavItem>
          <NavItem>
            <Link>Services</Link>
          </NavItem>
          <NavItem>
            <Link>Contact</Link>
          </NavItem>
        </NavBar>
      </Grid>
      <Grid style={{ flex: 0.1 }}>
        <h1>profile</h1>
      </Grid>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${(props) => props.style}
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  ${(props) => props.style}
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin-block-start: 50px;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 10px;
  margin-inline: 30px;
`;

const Button = styled.button;

import styled from "styled-components";
import { themes } from "../../styles/ColorStyles";
import { Button } from "antd";
import { HeartFilled } from "@ant-design/icons";
export default function Navbar() {
  return (
    <StyledNav>
      <StlyedNavContainer>
        <HeaderSection>
          SMILE
          <span>SME</span>
        </HeaderSection>
        <MenuSection>
          Menu
          <Button
            type="text"
            style={{ color: "white" }}
            icon={<HeartFilled style={{ fontSize: "22px" }} />}
          ></Button>
        </MenuSection>
      </StlyedNavContainer>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: absolute;
  width: 100%;
  height: 48px;
  top: 0;
  z-index: 10;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  transition: transform 0.3s ease-in-out;
 
  }
`;

const StlyedNavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const HeaderSection = styled.div`
  background: ${themes.light.navbarColor1};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  flex: 3;
  color: ${themes.light.textLogo1};
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 0rem 1rem;
  span {
    display: inline-block;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    color: ${themes.light.text2};
    text-decoration: none;
  }
`;

const MenuSection = styled.div`
  width: 100%;
  display: flex;
  background: orange;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  align-content: center;
  flex: 1;
  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 0rem 1rem;
  color: ${themes.light.text2};
  font-weight: lighter;
`;

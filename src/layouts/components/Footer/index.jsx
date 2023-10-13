import React from "react";
import styled from "styled-components";
import DesktopFooter from "./desktop/index";
import { ElementColor } from "../../../constants/colors";

  
const FooterStyle = styled.footer`
    background: ${ElementColor.primary};
    color: ${ElementColor.white};
    font-family: 'Inter', sans-serif;
`;
    
function Footer() {

    return (
        <FooterStyle>
            <DesktopFooter  />
        </FooterStyle>
    )
  }
  
  export default Footer;

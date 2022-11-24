import React from "react";
import styled from "styled-components";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <FooterWrap>
      <Newsletter />
      <sup>
        Big Cica Boss &copy; {new Date().getFullYear()} All Rights Reserved
      </sup>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  padding: var(--vspace-3);
  background-color: var(--grey);
  margin: var(--vspace-3);
  display: grid;
  align-items: center;
`;

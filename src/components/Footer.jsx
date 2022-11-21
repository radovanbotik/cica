import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrap>
      <h6>
        Big Cica Boss &copy; {new Date().getFullYear()} All Rights Reserved
      </h6>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  padding: var(--vspace-3);
  background-color: var(--grey);
  margin: var(--vspace-3);
`;

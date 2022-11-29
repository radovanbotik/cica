import React from "react";
import styled from "styled-components";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <FooterWrap>
      <Control>
        <Newsletter />
        <sup>
          Big Cica Boss &copy; {new Date().getFullYear()} All Rights Reserved
        </sup>
      </Control>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  padding: var(--vspace-3);
  margin: var(--vspace-3);
`;

const Control = styled.section`
  background-color: var(--bg);
  display: grid;
  align-items: center;
  sup {
    text-align: left;
  }
`;

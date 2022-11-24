import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Error() {
  return (
    <Section>
      <h1>Are you lost???</h1>
      <Link to="/">return to homepage</Link>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  place-items: center;
  height: 60vh;
`;

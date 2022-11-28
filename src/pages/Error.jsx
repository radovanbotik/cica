import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import lost from "../assets/lost.gif";
export default function Error() {
  return (
    <Section>
      <h1>Are you lost fam???</h1>
      <div className="img-control">
        <img src={lost} alt="" />
      </div>
      <Button to="/">return to homepage</Button>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  place-items: center;
  h1 {
    text-transform: uppercase;
  }
  .img-control {
    max-width: 300px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  /* height: 100vh; */
`;
const Button = styled(Link)`
  color: var(--blue);
  font-family: var(--nunito);
  text-decoration: none;
  text-transform: uppercase;
  background-color: var(--pink);
  padding: 1rem 2rem;
  border: 2px solid var(--grey);
  box-shadow: 4px 4px 0px 0px black;
  font-weight: 600;

  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link to={`${props.path}`}>
      <ButtonStyle>{props.textContent}</ButtonStyle>
    </Link>
  );
}

const ButtonStyle = styled.button`
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

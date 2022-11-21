import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return <ButtonStyle>{props.textContent}</ButtonStyle>;
}

const ButtonStyle = styled.button`
  background-color: var(--pink);
  padding: 1rem 2rem;
  border: 2px solid var(--grey);
  box-shadow: 2px 2px 0px 4px black;
  &:hover {
    transform: scale(0.95);
  }
`;

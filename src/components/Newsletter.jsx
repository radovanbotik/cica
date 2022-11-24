import React from "react";
import styled from "styled-components";

export default function Newsletter() {
  return (
    <Control>
      <h4>Join my newsletter and get a hefty discount!</h4>
      <Form action="https://formspree.io/f/xeqddwdw" method="POST">
        <div className="field">
          <input type="text" name="email" />
          <button type="submit">
            <span>subscribe</span>
          </button>
        </div>
      </Form>
    </Control>
  );
}

const Control = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-evenly; */
  gap: var(--vspace-3);
  h4 {
    margin: 0;
    margin-right: auto;
  }
`;
const Form = styled.form`
  flex-shrink: 0;
  transform: translateY(-4px);
  .field {
    border: 1px solid var(--blue);
    box-shadow: 2px 4px 0px 0px var(--blue);
    background-color: var(--grey);
  }
  input {
    padding: 0.5rem;
    border: 1px solid black;
    border-right: 0;
    border: 0;
    background-color: var(--grey);
  }
  button {
    height: 100%;
    /* border: 1px solid black; */
    border: 0;
    padding: 0.5rem;
    border-left: 0;
    font-family: inherit;
    background-color: var(--purple);
    text-transform: uppercase;
    cursor: pointer;
    /* transform: scale(0.97); */
    /* &:hover span {
      font-size: 1rem;
    } */
  }
`;

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
  gap: var(--vspace-3);
  h4 {
    margin: 0;
    margin-right: auto;
  }
`;
const Form = styled.form`
  flex-shrink: 0;
  .field {
    display: flex;
  }
  input {
    padding: 0.5rem;
    border-right: 0;
    border: 0;
    background-color: var(--buttons);
    border-right: 8px solid var(--bg);
  }
  button {
    padding: var(--vspace-3);
    display: inline-block;
    border: 0;
    font-family: var(--nunito);
    background-color: var(--buttons);
    color: var(--bg);
    text-transform: uppercase;
    cursor: pointer;
    /* transform: scale(0.97); */
    /* &:hover span {
      font-size: 1rem;
    } */
  }
`;

import React from "react";
import styled from "styled-components";

export default function Newsletter() {
  return (
    <Control>
      <h3>Let's stay in touch</h3>
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
  h3 {
    font-family: var(--nunito);
    margin: 0;
    margin-right: auto;
    align-self: end;
  }
`;
const Form = styled.form`
  flex-shrink: 0;
  .field {
    display: flex;
  }
  input {
    padding: 0.5rem var(--vspace-3);
    border-right: 0;
    /* border: 0; */
    background-color: var(--buttons);
    border-right: 4px solid var(--bg);
  }
  button {
    background-color: var(--buttons);
    color: var(--bg);
    font-family: inherit;
    text-transform: uppercase;
    padding: 0.5rem var(--vspace-3);
    cursor: pointer;
    /* border: 0; */
    /* transform: scale(0.97); */
    /* &:hover span {
      font-size: 1rem;
    } */
  }
`;

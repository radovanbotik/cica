import React from "react";
import styled from "styled-components";
import { mission } from "../utils/mission";
import { CardStyle } from "./Card";
import { useState, useRef } from "react";

export default function Mission() {
  return (
    <Section>
      <h2>Why I need your money:</h2>
      <Control>
        {mission.map((entry, index) => {
          const { icon, id, target, title } = entry;
          return (
            <Card key={id}>
              <span className="material-symbols-outlined close-icon">
                close
              </span>
              <h4>Goal #{id}:</h4>
              <h3>{title}</h3>

              <p className="short">{target}</p>

              <button
                onClick={e => {
                  e.target.previousElementSibling.classList.toggle("short");
                  e.currentTarget.textContent =
                    e.currentTarget.textContent === "show more"
                      ? "show less"
                      : "show more";
                }}
              >
                show more
              </button>
            </Card>
          );
        })}
      </Control>
    </Section>
  );
}

const Section = styled.section`
  h2 {
    font-weight: 700;
    text-transform: uppercase;
  }
`;
const Control = styled.div`
  display: grid;
  gap: var(--vspace-3);
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Card = styled(CardStyle)`
  .close-icon {
    justify-self: end;
    cursor: pointer;
  }
  h4 {
    justify-self: start;
    border-bottom: 8px solid var(--purple);
    color: var(--purple);
  }
  h3 {
    color: var(--purple);
  }
  .short {
    --max-lines: 3;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--max-lines);
  }
  button {
    background-color: var(--purple);
    color: inherit;
    font-family: inherit;
    text-transform: uppercase;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }
`;

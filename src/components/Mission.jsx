import React from "react";
import styled from "styled-components";
import { mission } from "../utils/mission";
import { CardStyle } from "./Card";
import confused from "../assets/confused.jpg";

export default function Mission() {
  return (
    <Section>
      <h2>I am a cat, why I need the dough?</h2>
      <Control>
        {mission.map((entry, index) => {
          const { icon, id, target, title } = entry;
          return (
            <Card key={id} bg={confused}>
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
    text-align: center;
  }
`;
const Control = styled.div`
  padding: var(--vspace-2);
  display: grid;
  gap: var(--vspace-3);
  /* @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  } */
`;
const Card = styled.article`
  padding: var(--vspace-2);
  width: 100%;
  /* display: grid; */
  /* box-shadow: -8px 4px 40px 0px var(--bg-small); */

  h4 {
    justify-self: center;
  }

  .short {
    --max-lines: 2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--max-lines);
  }
  button {
    background-color: var(--buttons);
    color: var(--bg);
    font-family: inherit;
    text-transform: uppercase;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }
`;

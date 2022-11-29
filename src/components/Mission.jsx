import React from "react";
import styled from "styled-components";
import { mission } from "../utils/mission";
import { CardStyle } from "./Card";
import confused from "../assets/confused.jpg";
import cicadrago from "../assets/cica-drago.png";
import cicabalboa from "../assets/cica-balboa.png";

export default function Mission() {
  return (
    <Section>
      <h2>I am a cat, why I need the dough?</h2>
      <Control>
        {mission.map((entry, index) => {
          const { icon, id, target, title } = entry;
          return (
            <Card key={id} bg={confused}>
              <p className="short">
                {target}
                <div className="images">
                  <div className="control">
                    <span>GOOD CICA</span>
                    <img src={cicabalboa} alt="enemy" />
                  </div>
                  <span className="versus">VS.</span>
                  <div className="control">
                    <span>BAD CICA</span>

                    <img src={cicadrago} alt="enemy" />
                  </div>
                </div>
              </p>
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
  box-shadow: inset 0px 0px 100px 0px black;
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
  p {
    .images {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .versus {
      align-self: center;
      font-size: 2rem;
    }
    .control {
      padding: var(--vspace-2);
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 200px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
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
    font-family: var(--volkhov);
    text-transform: uppercase;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }
`;

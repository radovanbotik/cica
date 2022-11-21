import React from "react";
import styled from "styled-components";
import { mission } from "../utils/mission";

export default function Mission() {
  return (
    <Section>
      <Control>
        {mission.map(entry => {
          const { icon, id, target, title } = entry;
          return (
            <Card key={id}>
              <h4>Goal #{id}:</h4>
              <h3>{title}</h3>
              <p>{target}</p>
            </Card>
          );
        })}
      </Control>
    </Section>
  );
}

const Section = styled.section``;
const Control = styled.div`
  display: grid;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--vspace-3);
  }
`;
const Card = styled.article`
  display: grid;
  border: 1px solid var(--blue);
  box-shadow: 2px 4px 0px 0px var(--blue);
  padding: var(--vspace-3);
  background-color: var(--grey);

  h4 {
    justify-self: start;
    border-bottom: 8px solid var(--purple);
    /* text-decoration: solid 8px underline; */
    color: var(--purple);
  }
  h3 {
    /* justify-self: start; */
    color: var(--purple);
    /* border-bottom: 2px solid var(--purple); */
  }
`;

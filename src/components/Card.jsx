import React from "react";
import styled from "styled-components";
import poster2 from "../assets/poster2.jpg";

// export default function Card() {
//   return <Card>Card</Card>;
// }

export const CardStyle = styled.article`
  /* align-self: flex-start; */
  display: grid;
  /* background-image: ; */
  background-image: linear-gradient(to bottom, #2a26291f, var(--bg)),
    url(${poster2});
  /* border: 1px solid var(--blue); */
  box-shadow: -8px 4px 40px 0px var(--bg-small);
  padding: var(--vspace-3);
  /* background-color: var(--bg-small); */
`;

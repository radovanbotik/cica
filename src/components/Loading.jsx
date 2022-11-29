import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import cica1 from "../assets/cica-majestic.png";
import cica2 from "../assets/cica-logo.png";
import cica3 from "../assets/cica-laying.png";
import cica4 from "../assets/cica-man.png";

export default function Loading() {
  return (
    <Section>
      <Loader>
        <div className="image-control">
          <img src={cica1} alt="" />
        </div>
        <div className="image-control">
          <img src={cica2} alt="" />
        </div>
        <div className="image-control">
          <img src={cica3} alt="" />
        </div>
        <div className="image-control">
          <img src={cica4} alt="" />
        </div>
      </Loader>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  place-content: center;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;
const Loader = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 6vw);
  grid-template-rows: repeat(4, 6vw);
  animation: ${rotate} 5s linear infinite;

  .image-control {
    height: 0;
    padding-top: 100%;
    overflow: hidden;
    position: relative;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .image-control:nth-of-type(1) {
    grid-column: 2/4;
    background-color: var(--blue);
    /* grid-row: 1/2; */
  }
  .image-control:nth-of-type(2) {
    grid-column: 3/5;
    grid-row: 2/3;
    background-color: var(--blue);
  }
  .image-control:nth-of-type(3) {
    grid-column: 2/4;
    grid-row: 3/5;
    background-color: var(--blue);
  }
  .image-control:nth-of-type(4) {
    grid-column: 1/3;
    grid-row: 2/4;
    background-color: var(--blue);
  }
`;

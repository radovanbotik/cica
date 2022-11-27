import React, { useState } from "react";
import styled from "styled-components";
import cicaHero from "../assets/cica-logo.png";
import cicaHeroLaser from "../assets/cica-logo-laser.png";

import Button from "./Button";

export default function Hero() {
  const [graphic, setGraphic] = useState(false);

  return (
    <Section>
      <Banner>
        <div className="col1">
          <h1 className="heading">BUY MY MERCH</h1>
          <div
            className="button-wrap"
            onMouseEnter={() => setGraphic(prev => !prev)}
            onMouseLeave={() => setGraphic(prev => !prev)}
          >
            <Button
              textContent={"make me dough"}
              path={"shop"}
              className="button"
            />
          </div>
        </div>
        <HeroImage className="image">
          <img src={graphic ? cicaHeroLaser : cicaHero} alt="hero-image" />
        </HeroImage>
      </Banner>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
        recusandae. Quae quos neque dignissimos magni unde rem, fuga mollitia
        ipsam odio aliquam laborum voluptas itaque voluptatum eum beatae est
        impedit nemo cumque assumenda facilis tempore pariatur, repellendus
        voluptatibus. Corporis ipsam quae perferendis in deserunt consequatur
        assumenda ab voluptatibus, obcaecati veniam.
      </p>
    </Section>
  );
}

const Section = styled.section``;
const Banner = styled.div`
  display: grid;
  justify-items: center;
  grid-template-areas:
    "col1"
    "image";
  gap: var(--vspace-2);
  @media (min-width: 700px) {
    grid-template-areas: "col1 col2";
  }
  .col1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 700px) {
      align-items: flex-start;
    }
  }
  .heading {
    text-decoration: solid var(--grey) underline 16px;
    text-align: center;
    @media (min-width: 700px) {
      text-align: left;
    }
  }
  .image {
    /* justify-self: left; */
  }
  .button {
    grid-area: col1;
  }
`;
const HeroImage = styled.div`
  max-width: 300px;
  min-width: 150px;

  @media (min-width: 700px) {
    min-width: 200px;
  }
  /* background-color: var(--pink); */
  /* clip-path: circle(50% at 20% 40%); */
  img {
    display: block;
    width: 100%;
  }
`;

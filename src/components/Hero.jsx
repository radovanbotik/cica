import React from "react";
import styled from "styled-components";
import cicaHero from "../assets/cica-hero.png";
import Button from "./Button";

export default function Hero() {
  return (
    <Section>
      <Banner>
        <div className="col1">
          <h1 className="heading">Buy My Merch</h1>
          <Button textContent={"Check The Store"} className="button" />
        </div>
        <HeroImage className="image">
          <img src={cicaHero} alt="" />
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

  grid-template-areas:
    "col1"
    "col2";
  gap: var(--vspace-2);
  @media (min-width: 600px) {
    grid-template-areas: "col1 col2";
  }
  .heading {
    grid-area: col1;
  }
  .image {
    justify-self: left;
  }
  .button {
    grid-area: col1;
  }
`;
const HeroImage = styled.div`
  max-width: 240px;
  background-color: var(--pink);
  clip-path: circle(50% at 20% 40%);
  img {
    display: block;
    width: 100%;
  }
`;

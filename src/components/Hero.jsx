import React, { useState } from "react";
import styled from "styled-components";
import cicaHero from "../assets/cica-logo.png";
import cicaHeroLaser from "../assets/cica-logo-laser.png";
import ransomnote1 from "../assets/ransomnote1.png";
import { Link } from "react-router-dom";
import poster3 from "../assets/poster3.jpg";
import wat from "../assets/wat.png";
import sky from "../assets/sky.jpg";

// import Button from "./Button";

export default function Hero() {
  const [graphic, setGraphic] = useState(false);

  return (
    <Section>
      <Banner>
        <div className="col1">
          {/* <h1 className="heading">BUY MY MERCH</h1> */}
          <div className="image-control">
            <img src={ransomnote1} alt="" />
          </div>
        </div>
        <HeroImage>
          <img
            src={graphic ? cicaHeroLaser : cicaHero}
            alt="hero-image"
            className="cica-image"
          />
          {graphic && (
            <img src={wat} alt="image of crown" className="crown-image" />
          )}
        </HeroImage>
        <div
          className="button-wrap"
          onMouseEnter={() => setGraphic(prev => !prev)}
          onMouseLeave={() => setGraphic(prev => !prev)}
        >
          <Button to="/shop">get that drip</Button>
        </div>
      </Banner>
      {/* <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
        recusandae. Quae quos neque dignissimos magni unde rem, fuga mollitia
        ipsam odio aliquam laborum voluptas itaque voluptatum eum beatae est
        impedit nemo cumque assumenda facilis tempore pariatur, repellendus
        voluptatibus. Corporis ipsam quae perferendis in deserunt consequatur
        assumenda ab voluptatibus, obcaecati veniam.
      </p> */}
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  /* margin-bottom: var(--vspace-1); */
  /* gap: var(--vspace-1); */
`;
const Banner = styled.div`
  /* background-image: linear-gradient(
      to bottom,
      rgba(206, 206, 208, 0.12),
      #f1f4db
    ),
    url(${poster3}); */
  background-image: url(${sky});
  background-size: cover;
  margin-bottom: var(--vspace-1);
  position: relative;
  display: grid;
  justify-items: center;
  grid-template-areas:
    "col1"
    "image"
    "button";
  gap: var(--vspace-2);
  border: 2px solid var(--bg);
  /* box-shadow: 0px 0px 100px 20px #b6c1e091; */
  box-shadow: 0px 0px 20px 20px var(--bg);

  @media (min-width: 700px) {
    grid-template-areas:
      "col1 image"
      "button button";
  }
  .col1 {
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--vspace-1);
    @media (min-width: 700px) {
      align-items: flex-start;
    }
    .image-control {
      max-width: 400px;
      min-width: 300px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .heading {
    text-decoration: solid var(--grey) underline 16px;
    text-align: center;
    @media (min-width: 700px) {
      text-align: left;
    }
  }
  .button-wrap {
    grid-area: button;
  }
`;
const HeroImage = styled.div`
  grid-area: image;
  /* width: 100%; */
  max-width: 300px;
  min-width: 150px;
  min-height: 250px;
  position: relative;
  @media (min-width: 700px) {
    min-width: 200px;
  }
  /* background-color: var(--pink); */
  /* clip-path: circle(50% at 20% 40%); */
  img.cica-image {
    display: block;
    width: 100%;
    position: absolute;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 2;
  }
  img.crown-image {
    display: block;
    width: 100%;
    position: absolute;
    height: 100%;
    object-fit: contain;
    top: -90px;
    left: 90px;
  }
`;
const Button = styled(Link)`
  /* color: #fcfafc; */
  /* display: block; */
  color: var(--bg);
  font-family: var(--nunito);
  text-decoration: none;
  text-transform: uppercase;
  padding: var(--vspace-3) var(--vspace-1);
  /* border: 2px solid var(--bg-small); */
  box-shadow: 0px 10px 40px 0px #070400;
  font-weight: 600;
  background-color: var(--buttons);
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;

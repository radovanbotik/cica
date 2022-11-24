import React from "react";
import styled from "styled-components";
import icon from "../assets/icon-chicken.png";

export default function Rating({ stars, reviews }) {
  const rating = Math.ceil(stars);
  const iconArray = Array.from({ length: stars });
  iconArray.fill(icon);

  return (
    <RatingWrap>
      {iconArray &&
        iconArray.map((entry, index) => {
          return (
            <div key={index} className="image-control">
              <img src={entry} alt="icon" />
            </div>
          );
        })}
    </RatingWrap>
  );
}

const RatingWrap = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15px, 30px)); */
  display: flex;
  .image-control {
    img {
      max-width: 30px;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

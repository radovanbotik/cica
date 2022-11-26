import React from "react";
import styled from "styled-components";
import { useState } from "react";
export default function ImagePreview({ images = [{ url: "" }] }) {
  const [big, setBig] = useState(images[0]);
  return (
    <Preview>
      <div className="big-image">
        <img src={big.url} alt="image" />
      </div>
      {/* <img src={big.url} alt="image" className="big-image" /> */}
      <div className="small-images">
        {images.map((entry, index) => {
          return (
            <div key={index} className="small-image">
              <img src={entry.url} onClick={e => setBig(images[index])} />
            </div>
          );
        })}
      </div>
    </Preview>
  );
}

const Preview = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: grid;
  gap: var(--vspace-3);

  .big-image {
    position: relative;
    height: 0;
    padding-top: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .small-images {
    display: grid;
    align-self: flex-start;
    grid-template-columns: repeat(auto-fit, minmax(40px, 80px));
    gap: var(--vspace-3);
  }
  .small-image {
    width: 100%;
    object-fit: cover;
    padding: 1ex;
    background-color: black;
    height: 0;
    padding-top: 100%;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;

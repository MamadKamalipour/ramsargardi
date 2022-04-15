import React from "react";
import "./DynamicImage.scss";
import styled from "styled-components";
function DynamicImage({ gallery }) {
  const Division = styled.div`
    background-image: ${(props) => `url(${props.image})`}; ;
  `;
  return (
    <div className="dynamic-image">
      <div className="container">

        <div className="gallery-wrap">
          {gallery.map((item, i) => (
            <Division
              key={i}
              image={item}
              className="item"
            ></Division>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DynamicImage;

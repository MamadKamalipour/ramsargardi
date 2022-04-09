import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
// context
import { VilaContext } from "../context/VilaContextProvider";
// components
import SingleVilaLayout from "../layout/SingleVilaLayout";
import DynamicImage from "../components/DynamicImage/DynamicImage";
import VilaSingleMain from "../components/VilaSingleMain/VilaSingleMain";
function SingleVila() {
  const location = useLocation();
  const { vilaData } = useContext(VilaContext);
  const id = location.pathname.split("/")[2];
  const vilaInfo = vilaData.find((vila) => vila.id === parseInt(id));

  return (
    <div className="container">
      <DynamicImage gallery={vilaInfo.gallery} />
      <SingleVilaLayout />
    </div>
  );
}

export default SingleVila;

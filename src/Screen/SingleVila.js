import React, { useContext } from "react";
import VilaFeatuers from "../components/VilaFeatuers/VilaFeatuers";
import { VilaContext } from "../context/VilaContextProvider";
import { useLocation } from "react-router-dom";
function SingleVila() {
  const location = useLocation();
  const { vilaData } = useContext(VilaContext);
  const id = location.pathname.split("/")[2];
  const vilaInfo = vilaData.find((vila) => vila.id === parseInt(id));

  return (
    <div>
      <VilaFeatuers vilaOptions={vilaInfo.feature} />
    </div>
  );
}

export default SingleVila;

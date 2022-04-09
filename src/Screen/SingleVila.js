import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
// context
import { VilaContext } from "../context/VilaContextProvider";
// components
import VilaFeatuers from "../components/VilaFeatuers/VilaFeatuers";
import SingleVilaLayout from "../layout/SingleVilaLayout";
function SingleVila() {
  const location = useLocation();
  const { vilaData } = useContext(VilaContext);
  const id = location.pathname.split("/")[2];
  const vilaInfo = vilaData.find((vila) => vila.id === parseInt(id));

  return (
    <SingleVilaLayout>



    </SingleVilaLayout>
  );
}

export default SingleVila;

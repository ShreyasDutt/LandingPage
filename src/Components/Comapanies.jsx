import React from 'react';
import SpotifySvg from "../assets/Spotify.svg"
import VodaSvg from "../assets/vodafone.jpg"
import CanonSvg from "../assets/canon.svg"
function Comapanies() {
    return (
      <div className={"mx-0 flex flex-wrap items-center space-x-4"}>
          <img src={SpotifySvg} width={"90px"} alt=""/>
          <img src={VodaSvg} width={"100px"} alt=""/>
          <img src={CanonSvg} width={"90px"} alt=""/>
      </div>
    );
}

export default Comapanies;
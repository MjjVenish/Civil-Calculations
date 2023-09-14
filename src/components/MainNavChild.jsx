import React from "react";
import { NavLink } from "react-router-dom";
import civilunit from "../assets/civil unit.png";
import Brick from "../assets/brick.png";
import cement from "../assets/Constrction Cost Estimation.png";
import carpetArea from "../assets/Icon_Carpet_Area.png";
import pcc from "../assets/PCC.png";
import plastering from "../assets/plastring.png";
import concreteBlock from "../assets/Concrete.png";
import precast from "../assets/Precast.jpg";
import flooring from "../assets/Flooring.png";
import counterop from "../assets/Counterop.png";
import tank from "../assets/Tank Volume.webp";
import air from "../assets/Air Conditioner Size.png";
import solar from "../assets/Solar Water.png";
import paint from "../assets/paint work.png";
import excavation from "../assets/excavation.png";
import wood from "../assets/wood framing.png";
import playwood from "../assets/playwood sheets.png";
import anti from "../assets/anti termite.png";
import round from "../assets/round column.png";
import stair from "../assets/stair case.png";
import top from "../assets/top soil.png";
import steelweight from "../assets/steel weight.png";
import concretetube from "../assets/concrete tube.png";
import roof from "../assets/roof pitch.png";
import asphalt from "../assets/asphalt.png";
import steelquantity from "../assets/steel quantity.png";

const MainNavChild = ({ brea, hidden }) => {
  return (
    <>
      <NavLink to={"/"} onClick={() => hidden()}>
        <img src={cement} alt="" /> Constrction Cost Estimation
      </NavLink>
      <NavLink>
        <img src={carpetArea} alt="" />
        Carpet Area / Built up Area / Super built up Area {brea ? <br /> : ""}
        Calculator
      </NavLink>
      <NavLink to={"/Cement-Concrete-Calculator"} onClick={() => hidden()}>
        <img src={pcc} alt="" /> Cement Concrete Calculator
      </NavLink>
      <NavLink>
        <img src={plastering} alt="" /> Plastering Calculator
      </NavLink>
      <NavLink>
        <img src={Brick} alt="" /> Brick Calculator
      </NavLink>
      <NavLink>
        <img src={concreteBlock} alt="" /> Concrete Block Calculator
      </NavLink>
      <NavLink>
        <img src={precast} alt="" /> Precast Component Wall Calculator
      </NavLink>
      <NavLink>
        <img src={flooring} alt="" /> Flooring Calculator
      </NavLink>
      <NavLink>
        <img src={counterop} alt="" /> Counterop (Platform) Calculator
      </NavLink>
      <NavLink>
        <img src={tank} alt="" /> Tank Volume Calculator
      </NavLink>
      <NavLink>
        <img src={air} alt="" /> Air Conditioner Size Calculator
      </NavLink>
      <NavLink>
        <img src={solar} alt="" /> Solar Water heater Calculator
      </NavLink>
      <NavLink>
        <img src={paint} alt="" /> paint work calculator
      </NavLink>
      <NavLink>
        <img src={excavation} alt="" /> excavation calculator
      </NavLink>
      <NavLink>
        <img src={wood} alt="" /> wood framing calculator
      </NavLink>
      <NavLink>
        <img src={playwood} alt="" /> playwood sheets calculator
      </NavLink>
      <NavLink>
        <img src={anti} alt="" /> anti termite calculator
      </NavLink>
      <NavLink>
        <img src={round} alt="" /> round column calculator
      </NavLink>
      <NavLink>
        <img src={stair} alt="" /> stair case calculator
      </NavLink>
      <NavLink>
        <img src={top} alt="" /> top soil calculator
      </NavLink>
      <NavLink>
        <img src={steelweight} alt="" /> steel weight calculator
      </NavLink>
      <NavLink>
        <img src={concretetube} alt="" /> concrete tube calculator
      </NavLink>
      <NavLink>
        <img src={roof} alt="" /> roof pitch calculator
      </NavLink>
      <NavLink>
        <img src={asphalt} alt="" /> asphalt calculator
      </NavLink>
      <NavLink>
        <img src={steelquantity} alt="" /> steel quantity calculator
      </NavLink>
      <NavLink>
        <img src={civilunit} alt="" /> civil unit calculator
      </NavLink>
    </>
  );
};

export default MainNavChild;

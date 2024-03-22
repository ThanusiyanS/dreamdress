import React, { useState } from "react";
import styled from "styled-components";
import Pant from "./Tabs/Pant";
import Avatar3D from "../components/3dmodel";
import Model1 from "../models/avatarmodel.glb";
import Model2 from "../models/scifi_girl.glb";
import Model3 from "../models/scene.gltf";
import Model from "../models/finalGirlModel.glb";
import Blouse from "./Tabs/Blouse";
import Frock from "./Tabs/Frock";
import Shoe from "./Tabs/Shoe";
import Bag from "./Tabs/Bag";
import Avatar3DT from "../components/tesEnv";
import TesEnv from "../components/FinatTest";
import car from "../models/car.glb";

const renderModel = (state) => {
  switch (state) {
    case 0:
      return <Pant />;
    case 1:
      return <Blouse />;
    case 2:
      return <Frock />;
    case 3:
      return <Shoe />;
    case 4:
      return <Bag />;
    default:
      return <Pant />;
  }
};

const types = ["Pant", "Blouse", "Frock", "Shoes", "Bags"];

const TrialOn = () => {
  const [state, setState] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <Box>
        {types.map((type, index) => (
          <Item onClick={() => setState(index)} key={index}>
            {type}
          </Item>
        ))}
      </Box>
      <Grid>
        <SelectionContainer>{renderModel(state)}</SelectionContainer>
        <ModelContainer>
          <Avatar3D modelUrl={Model} />
          {/* <TesEnv /> */}
        </ModelContainer>
      </Grid>
    </div>
  );
};

export default TrialOn;

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  width: 60%;
  padding: 10px;
  padding-inline: 30px;
  border-radius: 5px;
  background-color: rgba(100, 32, 170, 0.2);
  box-shadow: 0px 4px 30px rgba(100, 32, 170, 0.3);
  backdrop-filter: blur(5px) saturate(180%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
`;

const Item = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  font-weight: 400;
  margin: 10px;
  //   margin-inline: 10px;
  cursor: pointer;
`;

const Grid = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SelectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ModelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #bbbbbb;
  width: 50%;
`;

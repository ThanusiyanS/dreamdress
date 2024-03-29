import React, { useState, createContext, useContext, useRef } from "react";
import styled from "styled-components";
import Pant from "./Tabs/Pant";

import Blouse from "./Tabs/Blouse";
import Frock from "./Tabs/Frock";
import Shoe from "./Tabs/Shoe";
import Bag from "./Tabs/Bag";
//data
import { types } from "../data";

//variant

import Scene from "../components/Scene";

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

const DropContext = createContext();
export const useDrop = () => useContext(DropContext);

const TrialOn = () => {
  const [state, setState] = useState(0);
  const [droppedInArea, setDroppedInArea] = useState(false);
  const [item, setItem] = useState("");
  const [value, setValue] = useState("");

  const dropAreaRef = useRef(null);

  const handleDrop = (e, ui) => {
    const dropArea = dropAreaRef.current;

    if (!dropArea) return;
    console.log("hello");

    const { left, top, width, height } = dropArea.getBoundingClientRect();
    const dropAreaX = left;
    const dropAreaY = top;
    const dropAreaWidth = width;
    const dropAreaHeight = height;

    const draggableX = ui.lastX;
    const draggableY = ui.lastY;

    console.log("draggableX", draggableX, "draggableY", draggableY);
    console.log("dropAreaX", dropAreaX, "dropAreaY", dropAreaY);
    console.log(
      "dropAreaWidth",
      dropAreaWidth,
      "dropAreaHeight",
      dropAreaHeight
    );

    if (
      draggableX > dropAreaX - dropAreaWidth / 2 &&
      draggableX < dropAreaX + dropAreaWidth &&
      draggableY > dropAreaY - dropAreaHeight &&
      draggableY < dropAreaY
    ) {
      setDroppedInArea(true);
      console.log("dropped in area");
    } else {
      setDroppedInArea(false);
    }
  };

  console.log("droppedInArea", droppedInArea);
  console.log("item", item);
  return (
    <DropContext.Provider value={{ handleDrop, setItem }}>
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
            <Button
              onClick={() => setState(index)}
              disabled={index === 2 || index === 1 ? true : false}
              key={index}
            >
              {type}
            </Button>
          ))}
        </Box>
        <Grid>
          <SelectionContainer>{renderModel(state)}</SelectionContainer>
          <ModelContainer ref={dropAreaRef} style={{ zIndex: -1 }}>
            <Scene item={droppedInArea ? item : ""} />
          </ModelContainer>
        </Grid>
      </div>
    </DropContext.Provider>
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
  justify-content: space-between;
  align-items: center;
`;

const SelectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ModelContainer = styled.div`
  display: flex;
  // justify-content: flex-start;
  // align-items: center;
  // background-color: #bbbbbb;
  width: 50%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  width: 70px;
  padding: 5px;
  margin-inline: 10px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    transform: scale(1.05); /* Slightly larger on hover for a subtle effect */
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
  &:focus {
    background-color: #ff3ea5;
  }
  &:disabled {
    color: #bbbbbb;
  }
`;

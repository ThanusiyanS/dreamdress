import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { useDrop } from "../pages/TrialOn";

const DressCard = ({ dress }) => {
  const { handleDrop, setItem } = useDrop();
  const handleDrag = (e, ui) => {
    console.log("x:", ui.x, "y:", ui.y);
  };

  const handleStop = (e, ui) => {
    handleDrop(e, ui);
    setItem(dress.id);
    console.log(dress.id);
  };
  return (
    <Draggable
      onDrag={handleDrag}
      onStop={handleStop ? handleStop : null}
      axis="both"
      position={{ x: 0, y: 0 }}
      scale={1}
    >
      <Box>
        <img src={dress.img} alt={dress.name} height={100} width={100} />
        <Text>{dress.name}</Text>
        <Grid>
          <h4>{dress.price} LKR</h4>
          <Button>Try On</Button>
        </Grid>
      </Box>
    </Draggable>
  );
};

export default DressCard;

const Text = styled.h2`
  font-size: 24px;
  margin: 0 !important;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  height: 200px;
  border-radius: 10px;
  background-color: rgba(100, 32, 170, 0.4);
  box-shadow: 0px 4px 10px rgba(100, 32, 170, 0.4);
  backdrop-filter: blur(5px) saturate(180%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
  margin: 10px;
`;

const Button = styled.button`
  background-color: #ff3ea5;
  border: none;
  color: white;
  width: 70px;
  padding: 5px;
  margin-inline: 10px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #ff66b3; /* Slightly lighter pink on hover */
    transform: scale(1.05); /* Slightly larger on hover for a subtle effect */
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

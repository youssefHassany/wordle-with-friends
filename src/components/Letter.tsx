"use client";

import { RootState } from "@/state/store";
import { erase } from "@/state/word/currentWordSlicer";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  idx: number;
  value: string;
  rightWord: string | undefined;
}

type Colors = "#538d4e" | "#b59f3b" | "#3a3a3c" | "transparent";

const Letter = ({ idx, value, rightWord }: Props) => {
  // const rightWord = "REACT";
  const turn = useSelector((state: RootState) => state.turn.value);
  const dispatch = useDispatch();
  const [color, setColor] = useState<Colors>("transparent");

  useEffect(() => {
    let newColor: Colors = "transparent"; // Default color

    if (value !== "" && typeof rightWord === "string") {
      if (rightWord.includes(value)) {
        newColor = "#b59f3b";
      } else {
        newColor = "#3a3a3c";
      }

      if (value === rightWord[idx]) {
        newColor = "#538d4e";
      }

      console.log(rightWord);
      console.log(value);
    }
    setColor(newColor);
    dispatch(erase()); // delete the current word to start again
  }, [turn]);

  return (
    <span key={idx} className="box" style={{ backgroundColor: color }}>
      {value}
    </span>
  );
};

export default Letter;

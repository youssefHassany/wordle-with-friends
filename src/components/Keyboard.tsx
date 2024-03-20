"use client";

import { RootState } from "@/state/store";
import { nextTurn } from "@/state/turn/turnSlice";
import { addLetter, deleteLast } from "@/state/word/currentWordSlicer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  rightWord: string | undefined;
}

const Keyboard = ({ rightWord }: Props) => {
  // const rightWord: string = "REACT";
  const row1: string[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2: string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3: string[] = ["Z", "X", "C", "V", "B", "N", "M"];

  const currentWord = useSelector(
    (state: RootState) => state.currentWord.value
  );
  const turn = useSelector((state: RootState) => state.turn.value);
  const dispatch = useDispatch();

  const addNewLetter = (letter: string) => {
    if (currentWord.length < 5) {
      dispatch(addLetter(letter));
    }
  };

  const checkWord = (curr: string) => {
    // if the answer is right win the game
    if (curr === rightWord) {
      setTimeout(() => {
        alert("Right Answer");
      }, 100);
    }

    // get to the next turm
    dispatch(nextTurn());

    // if the last answer is wrong lose the game
    if (curr !== rightWord && turn > 3) {
      setTimeout(() => {
        alert(`You Lost! Right Answer is ${rightWord}`);
      }, 100);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const { key } = event;

      if (/^[a-zA-Z]$/.test(key.toUpperCase())) {
        addNewLetter(key.toUpperCase());
      } else if (key === "Enter") {
        checkWord(currentWord);
      } else if (key === "Backspace") {
        dispatch(deleteLast());
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentWord, dispatch]);

  return (
    <section className="keyboard">
      <div>
        {row1.map((letter) => (
          <button key={letter} onClick={() => addNewLetter(letter)}>
            {letter}
          </button>
        ))}
      </div>

      <div>
        {row2.map((letter) => (
          <button key={letter} onClick={() => addNewLetter(letter)}>
            {letter}
          </button>
        ))}
      </div>

      <div>
        <button onClick={() => checkWord(currentWord)}>Enter</button>
        {row3.map((letter) => (
          <button key={letter} onClick={() => addNewLetter(letter)}>
            {letter}
          </button>
        ))}
        <button onClick={() => dispatch(deleteLast())}>Delete</button>
      </div>
    </section>
  );
};

export default Keyboard;

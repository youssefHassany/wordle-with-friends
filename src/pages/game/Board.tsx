import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Letter from "./Letter";

interface Row {
  value: string;
  color?: string;
  status?: "found" | "exist" | "absent" | "";
}

interface Props {
  rightWord: string | undefined;
}

const Board = ({ rightWord }: Props) => {
  const currentWord = useSelector(
    (state: RootState) => state.currentWord.value
  );
  const turn = useSelector((state: RootState) => state.turn.value);

  const row1: Row[] = [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ];
  const row2: Row[] = [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ];
  const row3: Row[] = [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ];
  const row4: Row[] = [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ];
  const row5: Row[] = [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ];

  const [tries, setTries] = useState([row1, row2, row3, row4, row5]);

  useEffect(() => {
    const updatedTries = tries.map((row, rowIndex) =>
      rowIndex !== turn
        ? row // Keep other rows unchanged
        : row.map((letter, i) => {
            return {
              ...letter,
              value: i < currentWord.length ? currentWord[i] : "",
            };
          })
    );

    setTries(updatedTries);
  }, [currentWord, turn]);

  return (
    <section className="board">
      {tries.map((eachTry, index) => (
        <div key={index} className="box-container">
          {eachTry.map((letter, idx) => (
            <span key={idx}>
              <Letter idx={idx} value={letter.value} rightWord={rightWord} />
            </span>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Board;

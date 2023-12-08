import Board from "./Board";
import Keyboard from "./Keyboard";
import { useParams } from "react-router-dom";
import { useDecrypt } from "../../hooks/useDecrypt";

const Game = () => {
  const { encryptedVariable } = useParams();
  const decryptedValue = useDecrypt(encryptedVariable?.slice(1));
  let rightAns = decryptedValue;

  return (
    <main>
      <Board rightWord={rightAns} />
      <Keyboard rightWord={rightAns} />
    </main>
  );
};

export default Game;

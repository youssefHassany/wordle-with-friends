import Board from "./Board";
import Keyboard from "./Keyboard";
import { useParams } from "react-router-dom";
import { useDecrypt } from "../../hooks/useDecrypt";
import { useEffect, useState } from "react";

const Game = () => {
  const { encryptedVariable } = useParams();
  const [rightAns, setRightAnswer] = useState<string | undefined>();

  useEffect(() => {
    const decrypted = useDecrypt(encryptedVariable);
    setRightAnswer(decrypted);
  }, [encryptedVariable]);

  return (
    <main>
      {rightAns ? (
        <>
          <Board rightWord={rightAns} />
          <Keyboard rightWord={rightAns} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Game;

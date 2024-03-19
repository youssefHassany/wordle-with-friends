"use client";
import Board from "@/components/Board";
import Keyboard from "@/components/Keyboard";
import { useDecrypt } from "@/hooks/useDecrypt";
import { useState } from "react";

const Game = ({ params }: { params: { encryptedVariable: string } }) => {
  const encryptedVariable = params.encryptedVariable;
  const decrypted = useDecrypt(encryptedVariable);
  const [rightAns, setRightAnswer] = useState<string | undefined>(decrypted);

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

"use client";

import { useEncrypt } from "@/hooks/useEncrypt";
import React, { useRef, useState } from "react";

const MenuForm = () => {
  const [word, setWord] = useState("");
  const [copied, setCopied] = useState(false);
  const encyptedWord = useRef("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    encyptedWord.current = useEncrypt(word);

    //copy to clipboard
    navigator.clipboard.writeText(
      `${window.location.href}game/${encyptedWord.current}`
    );

    setCopied(true);
    setWord("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        minLength={5}
        maxLength={5}
        required
        placeholder="Write 5 letter word"
        type="text"
        value={word}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setWord(e.target.value.toUpperCase())
        }
      />
      <button
        className="sub-btn"
        type="submit"
        style={{
          backgroundColor: copied ? "rgb(98, 181, 91)" : "#fff",
          color: copied ? "#fff" : "#000",
        }}
      >
        {copied ? "Link Copied!" : "Copy Link"}
      </button>
    </form>
  );
};

export default MenuForm;
export const useDecrypt = (word: string | undefined) => {
  if (typeof word === "string") {
    let shiftedWord = "";
    for (let i = 0; i < word.length; i++) {
      let character = word[i];
      let newCharCode = character.charCodeAt(0) - 3;

      // Handle characters outside the alphabet range
      if (newCharCode < 65 || newCharCode > 90) {
        newCharCode -= 26;
      }

      shiftedWord += String.fromCharCode(newCharCode);
    }

    return shiftedWord;
  }
};

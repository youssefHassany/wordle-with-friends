import { Route, Routes } from "react-router-dom";
import Game from "./pages/game/Game";
import Menu from "./pages/menu/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game/:encryptedVariable" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;

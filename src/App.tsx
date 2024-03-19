import { Route, Routes } from "react-router-dom";
import Game from "./pages/game/Game";
import Menu from "./pages/menu/Menu";
import NotFound from "./pages/not found/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game/:encryptedVariable" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

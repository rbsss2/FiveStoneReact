import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/style/GlobalStyle";
import FiveStone from "./component/FiveStone";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<FiveStone />} />
      </Routes>
    </div>
  );
}

export default App;

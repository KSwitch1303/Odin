import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App font-beatrice">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        
    </div>
  );
}

export default App;

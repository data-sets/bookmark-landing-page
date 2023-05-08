import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./assets/modules/Index";
import NoMatch from "./assets/modules/NoMatch";

import "./dist/style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;

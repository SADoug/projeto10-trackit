import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {useState} from "react";

import LoginPage from "./LoginPage";
import MarketPage from "./MarketPage";
import SignUpPage from "./SignUpPage";

function App() {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage salvarToken={(token) => setToken(token)} />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/market" element={<MarketPage token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

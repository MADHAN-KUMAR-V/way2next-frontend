import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import College from "./pages/College";

function App() {
  const API_URL = "https://way2next.onrender.com/api/v1/college"
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home API_URL={API_URL} />} />
        <Route path="/:id" element={<College API_URL={API_URL} />} />   
      </Routes>
    </BrowserRouter>
  );
}


export default App;

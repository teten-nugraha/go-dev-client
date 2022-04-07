import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Analitik from "./pages/Analitik";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todos from "./pages/Todos";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <main role="main" class="container">
          <br /><br /><br />
          
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/analitik" element={<Analitik />} />
          </Routes>

        </main>

      </div>

      
    </BrowserRouter>
  );
}

export default App;

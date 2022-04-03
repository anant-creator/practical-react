import './App.css';
import { Greet } from "./components/Greet";
import Wish from "./components/Wish";
import Usestate from './components/Usestate';
import hot from "../src/images/hot.jpg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const navLinks = {
    first: "Index.html",
    second: "About-us.php"
  }

   return (
     <div className="App">
      {/* <Router>
    <Routes>
          <Route path="/greet" element={<Wish />}></Route>
          <Route path="/wish" element={<Greet />}></Route>
          <Route path="/" element={<Usestate logo={hot} links={navLinks} />}></Route>
        </Routes>
    </Router> */}
        <Usestate logo={hot} links={navLinks} />
    </div>
  );
}

export default App;

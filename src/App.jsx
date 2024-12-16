import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import BinarySearch from './components/BinarySearch';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Binary" element={<BinarySearch/>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;

import Cards from "./components/Cards";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom"
import AddMovie from "./components/AddMovie";
function App() {
  return (
    <div className="App"> 
      <Header />
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/addMovie" element={<AddMovie/>} />
      </Routes>
      
    </div>
  );
}

export default App;

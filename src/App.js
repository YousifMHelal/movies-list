import NavBar from "./Components/NavBar";
import CardList from "./Components/CardList";
import MovieDetials from "./Components/MovieDetials";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="movies-list/" element={<CardList />} />
        <Route path="/movie/:id" element={<MovieDetials />} />
      </Routes>
    </div>
  );
}

export default App;

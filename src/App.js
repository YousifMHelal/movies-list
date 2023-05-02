import NavBar from "./Components/NavBar";
import CardList from "./Components/CardList";
import MovieDetials from "./Components/MovieDetials";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {

  const [movie, setMovie] = useState([]);
  const [pages, setPages] = useState(0)

  const getAllMovies = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=987ad6fe44b4a35d5d0d5b616b840702&language=en-US')
    setMovie(res.data.results)
    if (res.data.total_pages >= 500) {
      setPages(500)
    } else {
      setPages(res.data.total_pages)
    }
  }


  const getSearchedMovies = async (word) => {
    if (word === '') {
      getAllMovies()
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=987ad6fe44b4a35d5d0d5b616b840702&language=en-US&query=${word}`)
      setMovie(res.data.results)
      if (res.data.total_pages >= 500) {
        setPages(500)
      } else {
        setPages(res.data.total_pages)
      }
    }
  }

  const getSelectedMovies = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=987ad6fe44b4a35d5d0d5b616b840702&language=en-US&page=${page}`)
    setMovie(res.data.results)
  }

  useEffect(() => {
    getAllMovies();
  }, [])


  return (
    <div>
      <NavBar search={getSearchedMovies} />
        <Routes>
          <Route path="movies-list/" element={<CardList
            movie={movie}
            select={getSelectedMovies}
            pages={pages} />
          } />
          <Route path="/movie/:id" element = {<MovieDetials />}/>
        </Routes>
    </div>
  );
}

export default App;

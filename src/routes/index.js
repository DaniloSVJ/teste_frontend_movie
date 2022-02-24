import { Route, Routes,useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import MoviePages from "../pages/Movie";
const Browser = () => {
  return (
  
      <Routes>
          <Route path="/" element={<Home />  } exact></Route>
          <Route path="/movie/:id" element={<MoviePages />}></Route>
      </Routes>


      )
}

export default Browser;

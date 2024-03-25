import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movie from './Components/Movie';
import Popular from './Components/Popular';
import Rated from './Components/Rated';
import Navbar from './Components/Navbar';
import Error from './Components/Error';
import Upcoming from './Components/Upcoming';
import View from './Components/View';


function App() {
  return (
    <div>
         <BrowserRouter>
         <Navbar />
        <Routes>
          <Route path='/' element={<Movie />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/coming' element={<Upcoming />} />
          <Route path='/rated' element={<Rated />} />
          <Route path="/view" element={<View />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        </BrowserRouter>
      
    
    </div>
  );
}

export default App;





















// https://api.themoviedb.org/3/trending/movie/day?&api_key=6957b9a83c7a116cb337aebd2343b310&language=en-US

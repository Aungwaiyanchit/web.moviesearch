import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Results } from './components/Results';
import { Wrapper } from './components/Wrapper';
import { Home } from './pages/Home'
import { Movies } from './pages/Movies';
import { PersonDetail } from './pages/PersonDetail';
import { Search } from './pages/Search';
import { SearchMovie } from './pages/SearchMovie';
import { SearchPeople } from './pages/SearchPeople';
import { SearchTv } from './pages/SearchTv';
import { Tvshow } from './pages/Tv-show';




function App() {
  return (
    <BrowserRouter>
    <Wrapper>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='movies' element={<Movies />}></Route>
        <Route path='tv-shows' element={<Tvshow />}></Route>
        <Route path='person/:id' element={<PersonDetail />}></Route>
        <Route path='search' element={<Search />}>
          <Route path='' element={<Results />}></Route>
          <Route path='person' element={<SearchPeople />}></Route>
          <Route path='movie' element={<SearchMovie />}></Route>
          <Route path='tv' element={<SearchTv />}></Route>
        </Route>
      </Routes>
    </Wrapper>
    </BrowserRouter>
  );
}

export default App;

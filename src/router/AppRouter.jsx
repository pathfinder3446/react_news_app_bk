import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Navbarr from '../components/Navbar';
import Main from '../pages/Main';
import FavouriteNews from '../pages/FavouriteNews';
import NewsDetail from '../pages/NewsDetail';
import Source from '../pages/Source';
import { useState } from 'react';


const AppRouter = () => {
  const [favorite, setFavorite] = useState(false)
  
  return (
    <BrowserRouter>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/favourites" 
        element={<FavouriteNews favorite={favorite} setFavorite={setFavorite} />} />
        <Route path="/details" 
        element={<NewsDetail favorite={favorite} setFavorite={setFavorite} />} />
        <Route path="/details/source" element={<Source />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../src/pages/Layout/Layout';
import HomePage from '../src/pages/HomePage/HomePage';
import ArtistPage from '../src/pages/ArtistPage/ArtistPage';
import AlbumPage from '../src/pages/AlbumPage/AlbumPage';

export default function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/artist/id' element={<ArtistPage />} />
          <Route path='/artist/id/album_id' element={<AlbumPage />} />
        </Route>
      </Routes>
  );
}
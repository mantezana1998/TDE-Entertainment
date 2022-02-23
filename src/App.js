import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../src/pages/Layout/Layout';
import HomePage from '../src/pages/HomePage/HomePage';
import ArtistPage from '../src/pages/ArtistPage/ArtistPage';
import AlbumPage from '../src/pages/AlbumPage/AlbumPage';
// import { useState, useEffect } from React;
import React from 'react';
import Login from '../src/components/Login/Login'

export default function App() {

  // const [toke, setToken] = useState("")

  // useEffect(() => {

  // }, [])


  return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/artist/id' element={<ArtistPage />} />
          <Route path='/artist/id/album_id' element={<AlbumPage />} />
        </Route>
      </Routes>
  );
}
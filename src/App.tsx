import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Home from './Home';
import Missing from './Missing';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import api from './api/post';
import EditPost from './EditPost';
import { MyProvider } from './context/DataContext'
// import {useState,useEffect} from 'react';

interface objectProps {
  id: number,
  title: string,
  datetime: string,
  body: string
}


function App() {
  

  return (
    <MyProvider>
      <div className="App">
        <Nav  />
        <Header />

        <>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/NewPost" element={<NewPost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/Missing" element={<Missing />} />
          </Routes>
        </>
        <Footer />
      </div>
    </MyProvider>
  );
}

export default App;

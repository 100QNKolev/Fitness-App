import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { CreatePost } from './components/CreatePost/CreatePost';
import { Details } from './components/Details/Details';
import { AuthProvider } from './contexts/authContext';
import { EditPost } from './components/Edit/Edit';
import { PostProvider } from './contexts/gameContext';

function App() {

  return (
    <AuthProvider>
      <PostProvider>
        <div className="App">
          <Header />

          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/catalog' element={<Catalog posts={posts} />} />
              <Route path='/create' element={<CreatePost onSubmitHandler={onCreateSubmit} />} />
              <Route path='/catalog/:postId' element={<Details onDeleteHandler={deletePostHandler} />} />
              <Route path='/catalog/:postId/edit' element={<EditPost onSubmitHandler={onEditSubmit} />} />
            </Routes>
          </main>

        </div>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;

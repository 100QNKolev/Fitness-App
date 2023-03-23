import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import * as postService from './services/postService';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { CreatePost } from './components/CreatePost/CreatePost';
import { Details } from './components/Details/Details';

function App() {

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    postService.getAll()
      .then(result => {
        setPosts(result);
      })
  });

  const onCreateSubmit = async (data) => {
    const newPost = await postService.create(data);
    
    setPosts(x => [...x, newPost]);

    navigate('/catalog');
  };

  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/catalog' element={<Catalog posts={posts} />} />
          <Route path='/create' element={<CreatePost onSubmitHandler={onCreateSubmit} />} />
          <Route path='/catalog/:postId' element={<Details />}/>
        </Routes>
      </main>

    </div>
  );
}

export default App;

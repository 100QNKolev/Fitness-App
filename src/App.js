import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as postService from './services/postService';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { CreatePost } from './components/CreatePost/CreatePost';
import { Details } from './components/Details/Details';
import * as authService from './services/authService';
import { AuthContext } from './contexts/authContext';

function App() {

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState({});

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

  const onLoginSubmit = async (data) => {
    const result = await authService.Login(data);

    setUser(result);
  };

  const onRegiserSubmit = async (data) => {
    const result = await authService.Register(data);
    console.log(result);
    //setUser(result);
  };

  const context = {
    userId: user._id,
    email: user.email,
    token: user.acessToken,
    isAuthenticated: !!user.accessToken,
  };

  return (
    <AuthContext.Provider value={context}>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
            <Route path='/register' element={<Register onRegisterSubmit={onRegiserSubmit} />} />
            <Route path='/catalog' element={<Catalog posts={posts} />} />
            <Route path='/create' element={<CreatePost onSubmitHandler={onCreateSubmit} />} />
            <Route path='/catalog/:postId' element={<Details />} />
          </Routes>
        </main>

      </div>
    </AuthContext.Provider>
  );
}

export default App;

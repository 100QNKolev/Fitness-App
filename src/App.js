import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { postServiceFactory } from './services/postService';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { CreatePost } from './components/CreatePost/CreatePost';
import { Details } from './components/Details/Details';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/authContext';
import { EditPost } from './components/Edit/Edit';

function App() {

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const postService = postServiceFactory(user.accessToken);
  const authService = authServiceFactory(user.accessToken);

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

  const onEditSubmit = async (data) => {
    const result = await postService.edit(data._id, data);

    setPosts(state => state.map(x => x._id === data._id ? result : x));

    navigate(`/catalog/${data._id}`);
  };

  const deletePostHandler = async (postId) => {

    await postService.deletePost(postId);

    setPosts(state => state.filter(x => x._id !== postId));

    navigate('/catalog');
  };

  const onLoginSubmit = async (data) => {
    const result = await authService.Login(data);

    setUser(result);

    navigate('/catalog');
  };

  const onLogoutHandler = async () => {
    await authService.Logout();

    setUser({});

    navigate('/');
  };

  const onRegisterSubmit = async (data) => {
    const result = await authService.Register(data);

    setUser(result);

    navigate('/catalog');
  };

  const context = {
    onRegisterSubmit,
    onLoginSubmit,
    onLogoutHandler,
    userId: user._id,
    email: user.email,
    token: user.accessToken,
    isAuthenticated: !!user.accessToken,
  };

  return (
    <AuthContext.Provider value={context}>
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
    </AuthContext.Provider>
  );
}

export default App;

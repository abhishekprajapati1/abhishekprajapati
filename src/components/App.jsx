import Home from './Home';
import '../css/App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import Dashboard from './admin/Dashboard';
import AdminNav from './admin/AdminNav';
import Signup from './admin/Signup';
import Login from './admin/Login';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Blogs from './Blogs';
import Blog from './Blog';
import Error from './Error';
import Navbar from './Navbar';
import { ThemeContext, themes } from '../contexts/themeContext.js';
import CreatePost from './admin/CreatePost';
const posts = [
  {
    post_title: "Python : A Programming Language",
    "id": 1,
    created_on: new Date().toLocaleDateString(),
    post_data: [
      {
        type: "paragraph",
        id: 0,
        content: "Python is a popular and easy to learn programming language. If you are a beginner and you want to learn a programming language, Python can be a nice pick for you. Hi my name is Abhishek Prajapati. In this article I am going to explain various features and facts about Python language so that you can make a good choice for yourself."
      },
      {
        type: "sub-heading",
        id: 1,
        content:"What Is Python ?"
      },
      {
        type: "paragraph",
        id: 2,
        content:"Python is a multi-purpose dynamic programming language. Syntax of this language is very close to english language that's why it is easy to learn for beginners. There are many free resources availbale online such as w3schools, tutorials point, GeeksForGeeks, JavaTpoint etc."
      },
      
    ]
  },
]



const elem = (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blogs' element={<Blogs posts={posts} />} />
      <Route path='blogs/blog/:id' element={<Blog posts={posts} />} />
      <Route path='*' element={<Error />} />
    </Routes>
  </Router>
);

const adminElem = (
  <Router>
    <AdminNav />
    <Routes>
      <Route path='/admin' element={<Login />} />
      <Route path='/admin/create' element={<CreatePost />} />
      <Route path='/admin/signup' element={<Signup />} />
      <Route path='*' element={<Error />} />
    </Routes>
  </Router>
);

function App() {

  const path = window.location.pathname;
  // console.log(path.includes('/admin'))
  const [darkMode, setDarkMode] = React.useState(true);


  return (
    <div className='main'>
      {(<ThemeContext.Consumer>
        {({ changeTheme }) => (
          <button id="toggle-mode" onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          >
            <i className='fas fa-moon'></i>
          </button>
        )}
      </ThemeContext.Consumer>)}
      {path.includes('/admin') !== true ? elem : adminElem}
    </div>
  );
}

export default App;

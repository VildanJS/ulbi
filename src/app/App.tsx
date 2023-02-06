import '../styles/style.scss';
import {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import MainPage from "pages/MainPage";
import AboutPage from "pages/AboutPage";
import {useTheme} from "app/providers/ThemeProvider";


const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle</button>
      <br/>
      <Link to='/'>Main</Link>
      <Link to='about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

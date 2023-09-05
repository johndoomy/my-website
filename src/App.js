import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home2 from './pages/Home2';
import About2 from './pages/About2';
import Portfolio from './pages/Portfolio';
import Connect from './pages/Connect';
// import image1 from './images/me_1.PNG';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path="/" exact element={<Home img={image1} />} /> */}
        <Route path="/" exact element={<Home2 />} />
        <Route path="/about" exact Component={About2} />
        <Route path="/portfolio" exact Component={Portfolio} />
        <Route path="/connect" exact Component={Connect} />
      </Routes>
    </div>
  );
}

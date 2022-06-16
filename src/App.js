import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/pages/Books';
import Categories from './components/pages/Categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route path="/calculator" element={<Categories />} />
    </Routes>
  </>
);

export default App;

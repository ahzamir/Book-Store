import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/pages/CategoriesPage';
import BooksPage from './components/pages/BooksPage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BooksPage />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;

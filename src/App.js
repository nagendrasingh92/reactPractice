import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Weather from './pages/Weather';
import NumberGame from './pages/NumberGame';
import TodoLists from './pages/TodoLists';
import ArrayOfObjects from './pages/ArrayOfObjects';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/numberGame" element={<NumberGame />} />
        <Route path="/todoLists" element={<TodoLists />} />
        <Route path="/arrayOfObjects" element={<ArrayOfObjects />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

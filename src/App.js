import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Weather from './pages/Weather';
import NumberGame from './pages/NumberGame';
import ToDoLists from './pages/ToDoLists';
import ArrayOfObjects from './pages/ArrayOfObjects';
import ProductPage from './pages/ProductPage';

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
        <Route path="/toDoLists" element={<ToDoLists />} />
        <Route path="/arrayOfObjects" element={<ArrayOfObjects />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/productPage" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

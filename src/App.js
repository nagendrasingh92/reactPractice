import { Route, Routes } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Weather from './pages/Weather';
import Header from './components/header/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;

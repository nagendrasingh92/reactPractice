import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Weather from './pages/Weather';
import NumberGame from './pages/NumberGame';
import TodoList from './pages/TodoList';
import DataTableUsingApi from './pages/DataTableUsingApi';
import LoginPage from './pages/LoginPage';
import SignUpPage from "./pages/SignUpPage";
import CounterPage from './pages/CounterPage';
import WeatherRedux from './pages/WeatherRedux';
import DataTableUsingApiRedux from "./pages/DataTableUsingApiRedux";
import TodoListsRedux from "./pages/TodoListsRedux";
import ProductPageRedux from "./pages/ProductPageRedux";



import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import QuizDashboard from "./pages/Quiz/QuizDashboard";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/numberGame" element={<NumberGame />} />
        <Route path="/todoLists" element={<TodoList />} />
        <Route path="/dataTableUsingApi" element={<DataTableUsingApi />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/productPageRedux" element={<ProductPageRedux />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/weatherRedux" element={<WeatherRedux />} />
        <Route path="/dataTableUsingApiRedux" element={<DataTableUsingApiRedux />} />
        <Route path="/todoListsRedux" element={<TodoListsRedux />} />
        <Route path="/quizDashboard" element={<QuizDashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

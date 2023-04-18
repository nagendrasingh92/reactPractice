import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Calculator from './pages/calculator/Calculator';
import Weather from './pages/weatherSearch/Weather';
import NumberGame from './pages/numberGame/NumberGame';
import TodoList from './pages/todoList/TodoList';
import DataTableUsingApi from './pages/dataTable/DataTableUsingApi';
import LoginPage from './pages/authentication/LoginPage';
import SignUpPage from "./pages/authentication/SignUpPage";
import CounterPage from './pages/CounterPage';
import WeatherRedux from './pages/weatherSearch/WeatherRedux';
import DataTableUsingApiRedux from "./pages/dataTable/DataTableUsingApiRedux";
import TodoListsRedux from "./pages/todoList/TodoListsRedux";
import ProductPageRedux from "./pages/productDisplay/ProductPageRedux";
import AdminPortal from "./pages/AdminPortal";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import QuizDashboard from "./pages/quiz/QuizDashboard";
import QuizType from "./pages/quiz/QuizType";
import QuizQuestion from './pages/quiz/QuizQuestion';
import QuizScore from "./pages/quiz/QuizScore";

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
        <Route path="/adminPortal" element={<AdminPortal />} />
        <Route path="/quizDashboard" element={<QuizDashboard />} />
        <Route path="/quizType" element={<QuizType />} />
        <Route path="/quizDashboard/score" element={<QuizScore />} />
        <Route path="/quizDashboard/:id/:subId" element={<QuizQuestion />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

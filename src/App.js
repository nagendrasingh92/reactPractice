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
import {PATHS} from './helper/constants/constants';
const { CALCULATOR } = PATHS;
const { NUMBER_GAME } = PATHS;
const { TODO_LISTS } = PATHS;
const { DATA_TABLE_USING_API } = PATHS;
const { WEATHER } = PATHS;
const { PRODUCT_PAGE_REDUX } = PATHS;
const { LOGIN_PAGE } = PATHS;
const { SIGN_UP_PAGE } = PATHS;
const { COUNTER } = PATHS;
const { WEATHER_REDUX } = PATHS;
const { DATA_TABLE_USING_API_REDUX } = PATHS;
const { TODO_LISTS_REDUX } = PATHS;
const { ADMIN_PORTAL } = PATHS;
const { QUIZ_DASHBOARD } = PATHS;
const { QUIZ_TYPE } = PATHS;
const { QUIZ_DASHBOARD_SCORE } = PATHS;
const { QUIZ_DASHBOARD_ID_SUBID } = PATHS;
const { HOME } = PATHS;




function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path={CALCULATOR} element={<Calculator />} />
        <Route path={NUMBER_GAME} element={<NumberGame />} />
        <Route path= {TODO_LISTS} element={<TodoList />} />
        <Route path={DATA_TABLE_USING_API} element={<DataTableUsingApi />} />
        <Route path={WEATHER} element={<Weather />} />
        <Route path={PRODUCT_PAGE_REDUX} element={<ProductPageRedux />} />
        <Route path={LOGIN_PAGE} element={<LoginPage />} />
        <Route path={SIGN_UP_PAGE} element={<SignUpPage />} />
        <Route path={COUNTER} element={<CounterPage />} />
        <Route path={WEATHER_REDUX} element={<WeatherRedux />} />
        <Route path={DATA_TABLE_USING_API_REDUX} element={<DataTableUsingApiRedux />} />
        <Route path={TODO_LISTS_REDUX} element={<TodoListsRedux />} />
        <Route path={ADMIN_PORTAL} element={<AdminPortal />} />
        <Route path={QUIZ_DASHBOARD} element={<QuizDashboard />} />
        <Route path={QUIZ_TYPE} element={<QuizType />} />
        <Route path={QUIZ_DASHBOARD_SCORE} element={<QuizScore />} />
        <Route path={QUIZ_DASHBOARD_ID_SUBID} element={<QuizQuestion />} />
        <Route path={HOME} element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

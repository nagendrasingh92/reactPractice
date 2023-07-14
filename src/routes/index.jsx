import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATH }  from '../helper/constants/route';
import Home from '../pages/Home';
import Calculator from '../pages/calculator/Calculator';
import Weather from '../pages/weatherSearch/Weather';
import NumberGame from '../pages/numberGame/NumberGame';
import TodoList from '../pages/todoList/TodoList';
import DataTableUsingApi from '../pages/dataTable/DataTableUsingApi';
import LoginPage from '../pages/authentication/LoginPage';
import SignUpPage from "../pages/authentication/SignUpPage";
import WeatherRedux from '../pages/weatherSearch/WeatherRedux';
import DataTableUsingApiRedux from "../pages/dataTable/DataTableUsingApiRedux";
import TodoListsRedux from "../pages/todoList/TodoListsRedux";
import ProductPageRedux from "../pages/productDisplay/ProductPageRedux";
import AdminPortal from "../pages/adminPortal/AdminPortal";
import QuizDashboard from "../pages/quiz/QuizDashboard";
import QuizType from "../pages/quiz/QuizType";
import QuizQuestion from '../pages/quiz/QuizQuestion';
import QuizScore from "../pages/quiz/QuizScore";
import {CONSTANTS} from '../helper/constants/constants';
import PublicLayout from '../layouts/PublicLayout';
const {BASEURL} = CONSTANTS;

const routes = createBrowserRouter([
    {
        path: ROUTE_PATH.ADMIN_PORTAL,
        element: <PublicLayout><AdminPortal /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.CALCULATOR,
        element: <PublicLayout><Calculator /></PublicLayout>,
    },
    
    {
        path: ROUTE_PATH.HOME,
        element: <PublicLayout><Home /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.WEATHER,
        element: <PublicLayout><Weather /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.WEATHER_REDUX,
        element: <PublicLayout><WeatherRedux /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.NUMBER_GAME,
        element: <PublicLayout><NumberGame /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.TODO_LISTS,
        element: <PublicLayout><TodoList /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.TODO_LISTS_REDUX,
        element: <PublicLayout><TodoListsRedux /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.DATA_TABLE_USING_API,
        element: <PublicLayout><DataTableUsingApi /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.DATA_TABLE_USING_API_REDUX,
        element: <PublicLayout><DataTableUsingApiRedux /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.LOGIN_PAGE,
        element: <PublicLayout><LoginPage /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.SIGN_UP_PAGE,
        element: <PublicLayout><SignUpPage /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.PRODUCT_PAGE_REDUX,
        element: <PublicLayout><ProductPageRedux /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.QUIZ_DASHBOARD,
        element: <PublicLayout><QuizDashboard /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.QUIZ_TYPE,
        element: <PublicLayout><QuizType /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.QUIZ_DASHBOARD_ID_SUBID,
        element: <PublicLayout><QuizQuestion /></PublicLayout>,
    },
    {
        path: ROUTE_PATH.QUIZ_DASHBOARD_SCORE,
        element: <PublicLayout><QuizScore /></PublicLayout>,
    },
], { 
    basename: BASEURL
}
);

export default routes;
import { RouterProvider } from "react-router-dom"
import './App.css';
import routes from './routes';
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <RouterProvider router={routes} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

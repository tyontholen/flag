import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Pages/HomePage.jsx";

// const router = createBrowserRouter (
//   createRoutesFromElements(

//   )
// )

function App() {
  return (
    <>
    
        <Navbar />
        <HomePage />
    </>
  );
}

export default App;


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
// importera routerfunktionerna

import "./index.css";

//import för rootlayouten
import RootLayout from "./layouts/RootLayout.jsx";

//import för pages
import HomePage from "./Pages/HomePage.jsx";
import CountryPage from "./Pages/CountryPage.jsx";


//routsen med tillhörande komponent
const router = createBrowserRouter (
createRoutesFromElements(
  // rootlayout, home som index. Navbar hänger med från RootLayouten
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage/>}></Route>
    <Route path="country/:countryCode" element={<CountryPage />} /> {/* detalj-route */}
  </Route>
  // todo! Error-route, 404
  )
);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;

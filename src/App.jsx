import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/home";
import Details from "./components/Details";
/*www.thecocktaildb.com/api/json/v1/1/search.php?s=*/
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;

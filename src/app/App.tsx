import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "../widgets/header/index";
import HomePage from "../pages/home/index";
// import  ContactPage  from "../pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header></Header>
        <div className="main-container">
          <Routes>
            <Route path={"/"} element={<HomePage></HomePage>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

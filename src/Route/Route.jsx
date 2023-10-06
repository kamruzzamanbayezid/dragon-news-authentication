import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>,
                        loader: () => fetch('/categories.json')
                  },
                  {
                        path: '/about',
                        element: <About></About>
                  },
                  {
                        path: '/career',
                        element: <Career></Career>
                  },
                  {
                        path: 'newsDetails/:id',
                        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                        loader: ({ params }) => fetch('/news.json')
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/register',
                        element: <Register></Register>
                  }
            ]
      }
]);

export default router;
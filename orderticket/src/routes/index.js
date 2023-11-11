import Login from "../authentication/login/Login";
import Signup from "../authentication/signup/Signup";
import HomePage from "../authentication/hompage/HomePage";
import Content from "../authentication/hompage/Content";
import Pagefilm from "../authentication/pagefilm/Pagefilm";
import InforFilm from "../authentication/pagefilm/InforFilm";
const publicRoutes = [
  {
    path: "/",
    component: Content,
    layout: HomePage,
  },
  {
    path: "/signin",
    component: Login,
    layout: HomePage,
  },
  {
    path: "/signup",
    component: Signup,
    layout: HomePage,
  },
  {
    path: "/pagefilm",
    component: Pagefilm,
    layout: HomePage,
  },
  {
    path: "/info",
    component: InforFilm,
    layout: HomePage,
  },
];
export { publicRoutes };

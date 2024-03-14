import SignInPage from "../pages/SignIn"
import FindTalentPage from "../pages/FindTalent"
import CliensPage from "../pages/Clients"
import CommunityPage from "../pages/Community"
import BlogPage from "../pages/Blog"
import AboutUsPage from "../pages/AboutUs"
import HomePage from "../pages/Home"




export const path = [
    {
      id: 1,
      path: "/signup",
      name: "Sign Up",
      hidden: true,
      Element: <SignInPage/>,
      search: "?",
    },
    {
      id: 2,
      path: "/findtalent",
      name: "Find Talent",
      hidden: false,
      Element: <FindTalentPage/>,
      search: "?",
    },
    {
      id: 3,
      path: "/clients",
      name: "Clients",
      hidden: false,
      Element: <CliensPage/>,
      search: "?",
    },
    {
      id: 4,
      path: "/community",
      name: "Community",
      hidden: false,
      Element: <CommunityPage/>,
      search: "?",
    },
    {
      id: 5,
      path: "/blog",
      name: "Blog",
      hidden: false,
      Element: <BlogPage/>,
      search: "?",
    },
    {
        id: 6,
        path: "/about",
        name: "About Us",
        hidden: false,
        Element: <AboutUsPage/>,
        search: "?",
      },
      {
        id: 7,
        path: "/",
        name: "Home",
        hidden: true,
        Element: <HomePage/>,
        search: "?",
      },
];
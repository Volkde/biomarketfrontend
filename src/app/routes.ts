import { Layout } from "components/Layout";
import { AboutPage } from "pages/About";
import { AccountPage } from "pages/Account";
import { ErrorPage } from "pages/ErrorPage";
import { HomePage } from "pages/Home";
import { LoginPage } from "pages/Login";
import { NotFoundPage } from "pages/NotFound";
import ProductDetail from "pages/ProductDetail/ProductDetail";
import { ProductsPage } from "pages/Products";
import { SearchPage } from "pages/Search";
import { SignupPage } from "pages/Signup";
import { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: "login",
        Component: LoginPage
      },
      {
        path: "signup",
        Component: SignupPage
      },
      {
        path: "profile",
        Component: AccountPage
      },
      {
        path: "search",
        Component: SearchPage
      },
      {
        path: "about",
        Component: AboutPage
      },
      {
        path: "products",
        Component: ProductsPage
      },
      {
        path: "product/:id",
        Component: ProductDetail
      },
      {
        path: "*",
        Component: NotFoundPage
      }
    ]
  }
];

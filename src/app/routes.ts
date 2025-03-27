import { Layout } from "components/Layout";
import { AboutPage } from "pages/About";
import { AccountPage } from "pages/Account";
import { HomePage } from "pages/Home";
import { LoginPage } from "pages/Login";
import { NotFoundPage } from "pages/NotFound";
import { ProductPage } from "pages/Product";
import { SearchResultPage } from "pages/SearchResult";
import { SignupPage } from "pages/Signup";
import { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "signup",
        Component: SignupPage,
      },
      {
        path: "profile",
        Component: AccountPage,
      },
      {
        path: "search-result",
        Component: SearchResultPage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "products/:productId",
        Component: ProductPage,
        loader: ({ request, params }) =>
          fetch(`/api/product/${params.productId}`, {
            signal: request.signal,
          }),
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
];

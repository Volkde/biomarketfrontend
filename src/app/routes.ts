import { Layout } from "components/Layout";
import { AboutPage } from "pages/About";
import { AccountPage } from "pages/Account";
import { CartPage } from "pages/Cart";
import { CheckoutPage } from "pages/Checkout";
import { ConditionsPage } from "pages/Conditions";
import { ErrorPage } from "pages/ErrorPage";
import { HomePage } from "pages/Home";
import { LoginPage } from "pages/Login";
import { MyShopPage } from "pages/MyShop";
import { NotFoundPage } from "pages/NotFound";
import { ProductPage } from "pages/Product";
import { ProductsPage } from "pages/Products";
import { SearchPage } from "pages/Search";
import { SettingsPage } from "pages/Settings";
import { SignupPage } from "pages/Signup";
import { TermsPage } from "pages/Terms";
import { WishlistPage } from "pages/Wishlist";
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
        path: "about",
        Component: AboutPage
      },
      {
        path: "profile",
        Component: AccountPage
      },
      {
        path: "cart",
        Component: CartPage
      },
      {
        path: "checkout",
        Component: CheckoutPage
      },
      {
        path: "conditions",
        Component: ConditionsPage
      },
      {
        path: "login",
        Component: LoginPage
      },
      {
        path: "my-shop",
        Component: MyShopPage
      },
      {
        path: "product/:id",
        Component: ProductPage
      },
      {
        path: "shop",
        Component: ProductsPage
      },
      {
        path: "search",
        Component: SearchPage
      },
      {
        path: "settings",
        Component: SettingsPage
      },
      {
        path: "signup",
        Component: SignupPage
      },
      {
        path: "terms",
        Component: TermsPage
      },
      {
        path: "wishlist",
        Component: WishlistPage
      },
      {
        path: "*",
        Component: NotFoundPage
      }
    ]
  }
];

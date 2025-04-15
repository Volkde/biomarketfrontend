import { useTranslation } from "react-i18next";

export const useBreadcrumbs = (): Record<string, { title: string }> => {
  const { t: tAbout } = useTranslation("page-about");
  const { t: tAccount } = useTranslation("page-account");
  const { t: tCart } = useTranslation("page-cart");
  const { t: tCheckout } = useTranslation("page-checkout");
  const { t: tHome } = useTranslation("page-home");
  const { t: tLogin } = useTranslation("page-login");
  const { t: tMyShop } = useTranslation("page-my-shop");
  const { t: tProducts } = useTranslation("page-products");
  const { t: tSearch } = useTranslation("page-search");
  const { t: tSettings } = useTranslation("page-settings");
  const { t: tSignUp } = useTranslation("page-signup");
  const { t: tWishlist } = useTranslation("page-wishlist");

  return {
    about: {
      title: tAbout("breadcrumbs")
    },
    account: {
      title: tAccount("breadcrumbs")
    },
    profile: {
      title: tAccount("breadcrumbs")
    },
    cart: {
      title: tCart("breadcrumbs")
    },
    checkout: {
      title: tCheckout("breadcrumbs")
    },
    home: {
      title: tHome("breadcrumbs")
    },
    login: {
      title: tLogin("breadcrumbs")
    },
    "my-shop": {
      title: tMyShop("breadcrumbs")
    },
    products: {
      title: tProducts("breadcrumbs")
    },
    shop: {
      title: tProducts("breadcrumbs")
    },
    store: {
      title: tProducts("breadcrumbs")
    },
    search: {
      title: tSearch("breadcrumbs")
    },
    settings: {
      title: tSettings("breadcrumbs")
    },
    signup: {
      title: tSignUp("breadcrumbs")
    },
    wishlist: {
      title: tWishlist("breadcrumbs")
    }
  };
};

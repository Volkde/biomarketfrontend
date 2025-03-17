import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { LayoutWrapper } from "./styles";
import type { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;

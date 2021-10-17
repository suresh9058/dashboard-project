import { Header, Footer, Sidebar, MainPage } from "../";

export function Layout() {
  return (
    <>
      <div className="root2">
        <Header />
        <Sidebar />
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

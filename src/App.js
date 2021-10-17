import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { WithAuth, WithProtected } from "./hoc";
import {
  SignIn,
  SignUp,
  Welcome,
  PreNavBar,
  Spacer,
  Layout,
} from "./components";

// function App() {
//   return (
//     <div className="root2">
//       <header className="pageHeader">Header</header>
//       <article className="mainArticle">Article</article>
//       <nav className="mainNav">Nav</nav>
//       <div className="siteAds">Ads</div>
//       <footer className="pageFooter">Footer</footer>
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <SignUp />
//     </>
//   );
// }

const routes = [
  {
    path: "/",
    exact: true,
    main: <Welcome />,
  },
  {
    path: "/signin",
    main: <SignIn />,
  },
  {
    path: "/signup",
    main: <SignUp />,
  },
];

function App() {
  // With Auth HOC to make sure user logged in or not
  // With Protected HOC to prevent the protected access to routes
  const PreNavBarWithAuth = WithAuth(PreNavBar, true);
  const SpacerWithAuth = WithAuth(Spacer, true);
  const LayoutWithProtected = WithProtected(WithAuth(Layout));

  return (
    <>
      <Router>
        {/* <Welcome /> */}
        <PreNavBarWithAuth />
        <SpacerWithAuth />
        <LayoutWithProtected />
        <Switch>
          {routes.map((route) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              children={route.main}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;

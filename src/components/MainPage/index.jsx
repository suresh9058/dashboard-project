import { Switch, Route } from "react-router-dom";
import { FaMicrosoft, FaTable, FaIdCard } from "react-icons/fa";
import { CardContainer } from "../CardContainer";
import GoogleApiWrapper from "../Map";
import Dashboard from "../Dashboard/Dashboard";

export const routes = [
  {
    path: "/dashboard",
    exact: true,
    icon: <FaMicrosoft />,
    displayName: "Dashboard",
    main: (
      <>
        <Dashboard />
        <Dashboard />
      </>
    ),
  },
  {
    path: "/table",
    displayName: "Table",
    icon: <FaTable />,
    main: <GoogleApiWrapper />,
  },
  {
    path: "/card",
    displayName: "Card",
    icon: <FaIdCard />,
    main: <CardContainer />,
  },
];

export function MainPage() {
  return (
    <article className="mainArticle">
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
    </article>
  );
}

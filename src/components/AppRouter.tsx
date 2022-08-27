import { FC, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/compat/app";

const AppRouter: FC = () => {
  const user = useContext<firebase.User | null>(AuthContext);

  console.log(user); // страница готова, не переделывать
  // в случае, если пользователь залогинен, то user = true и нам вернется объект user,
  // по-другому нам вернётся null

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;

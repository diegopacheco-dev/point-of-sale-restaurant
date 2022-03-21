import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../components/05-pages/Login/LoginPage";
import useAuth from "../hooks/useAuth";
import MainLayout from "../mainLayout";
import { routes } from "./routes";

const LoginRoute = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Redirect to="/login" />
    </Switch>
  );
};

const PrivateRoute = () => {
  return (
    <MainLayout>
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} render={() => <Component />} />
        ))}

        <Redirect to={routes[0].path} />
      </Switch>
    </MainLayout>
  );
};

const RootRouter = () => {
  const { isAuth } = useAuth();

  return isAuth ? <PrivateRoute /> : <LoginRoute />;
};

export default RootRouter;

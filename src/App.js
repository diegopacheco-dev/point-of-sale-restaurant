import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/05-pages/Login/LoginPage";
import AdminRouter from "./modules/Admin/AdminRouter";
import Private from './Private'

const App = () => {


  return (

    <HashRouter>

        <Switch>
            <Route path="/login" component={LoginPage} />
            <Private path="/" component={AdminRouter} />

        </Switch>

    </HashRouter>

  );
};

export default App;

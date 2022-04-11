import { Route, Routes as Switch } from "react-router-dom";
import { Layout } from "../components/templates/Layout";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Tasks } from "../components/pages/Tasks";
import { RequireAuth } from './RequireAuth';



export const Routes = () => {


  return (
    <Switch>
      <Route
        path="/"
        element={
          <Home />
        }
      />
      <Route element={<Layout />}>
        <Route
          path="/tarefas"
          element={
            <RequireAuth>
              <Tasks />
            </RequireAuth>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Page404 />
        }
      />
    </Switch>
  );

}



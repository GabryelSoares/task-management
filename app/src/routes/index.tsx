import { Route, Routes as Switch } from "react-router-dom";
import { Layout } from "../components/templates/Layout";
import { Home } from "../components/pages/Home";
import { RequireAuth } from './RequireAuth';
import { Tasks } from "../components/pages/Tasks";


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
    </Switch>
  );

}



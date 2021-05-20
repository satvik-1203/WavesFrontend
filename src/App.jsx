import React, { useEffect } from "react";
import Nav from "./components/Nav";
import fetchGenre from "./actions/fetchGenre";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenre());
  }, []);

  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route path="/SignUp">
          <SignUpPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;

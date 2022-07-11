import { Container } from "@material-ui/core";
import React from "react";
import NavBar from "./component/route/NavBar";
import AppRouter from "./component/route/Router";


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <AppRouter></AppRouter>
      </Container>
    </div>
  );
}

export default App;

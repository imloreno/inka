import React from "react";
import { Router } from "./routes";
import { BaseLayout } from "./components";
import "@popup/app.css";
import Header from "./containers/Header";

const App = () => {
  return (
    <BaseLayout>
      <Header />
      <Router />
    </BaseLayout>
  );
};

export default App;

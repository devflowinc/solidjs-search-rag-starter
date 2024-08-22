/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Route, Router } from "@solidjs/router";
import { SearchPage } from "./pages/SearchPage";
import { RedirectToSearch } from "./components/RedirectToSearch";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route path="/" component={SearchPage} />
      <Route path="*404" component={RedirectToSearch} />
    </Router>
  ),
  root!,
);

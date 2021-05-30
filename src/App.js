import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";

//Pages
import Home from "./pages/Home";
import NewMovies from "./pages/New-movies";
import Popular from "./pages/Popular";
import Movie from "./pages/Movie";
import Search from "./pages/Search/Search";
import Error404 from "./pages/Error404/Error404";

export default function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>

        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/New-movies" exact={true}>
              <NewMovies />
            </Route>
            <Route path="/Popular" exact={true}>
              <Popular />
            </Route>
            <Route path="/Search/" exact={true}>
              <Search />
            </Route>

            <Route path="/Movie/:id" exact={true}>
              <Movie />
            </Route>

            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

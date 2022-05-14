import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout/Layout";
import { Route, Switch } from "react-router-dom";
import HomePage from "./page/HomePage";
import About from "./page/About";
import Product from "./page/Product";
import ProductAddForm from "./page/ProductAddForm";
import ProductEditForm from "./page/ProductEditForm";
import Css from "./page/Css";
import CNX from "./page/CNX";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/database" component={About} />
        <Route exact path="/css" component={Css} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/cnx" component={CNX} />
        <Route exact path="/product" component={ProductAddForm} />
        <Route path="/product/:id" component={ProductEditForm} />
      </Switch>
    </Layout>
  );
}

export default App;

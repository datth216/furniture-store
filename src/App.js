import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";
import {
  AboutPage, CartPage, CheckoutPage, ErrorPage, HomePage, ProductsPage, SingleProductPage
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/about'>
          <AboutPage />
        </Route>
        <Route exact path='/cart'>
          <CartPage />
        </Route>
        <Route exact path='/products'>
          <ProductsPage />
        </Route>
        <Route
          exact
          path='/products/:productId'
          children={<SingleProductPage />}
        ></Route>
        <Route exact path='/checkout'>
          <CheckoutPage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

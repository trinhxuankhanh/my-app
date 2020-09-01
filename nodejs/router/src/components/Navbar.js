import React, { useState } from 'react';
import Products from '../pages/Products.js';
import './Navbar.css';
import  { Cart } from '../contexts/Cart.js';
import  { CartContext } from '../contexts/Cart.js';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Cart>
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/products">Products</Link>
              </NavItem>
              <NavItem>
                <Link to="/users">Users</Link>
              </NavItem>
              <NavItem>
                <Link to="/users">Cart
                  <img width='16px' height='16px' src="https://image.flaticon.com/icons/svg/126/126510.svg" alt="img" />
                  <CartContext.Consumer>
                    {
                      ({ cartItems }) => <sup>({cartItems.length})</sup>
                    }
                  </CartContext.Consumer>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Cart>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default Example;
import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login"
import Home from "./Home";
import Products from "./Products";
import Product from "./Product";
import Sections from "./Sections";
import Collections from "./Collections";
import Brands from "./Brands";
import Users from "./Users";
import User from "./User";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import NotFound from "./NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;

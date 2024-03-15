// const express = require("express");
import express from "express";
import products from "./data.js";

const app = express();

app.use(express.static("./client"));

// Middleware => Function => req, res, next()
// req <=> middleware <=> response
const auth = (req, res, next) => {
  const { username } = req.query;
  if (username !== "john") {
    res.status(404).json({ success: false, message: "Unauthorized user" });
  } else {
    next();
  }
};

app.use(auth);

// Routes
// request url => http://localhost:5000
// response => { success: true, message: "JSON response" }
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "This is JSON response" });
});

// http://localhost:5000/api/v1/products
app.get("/api/v1/products", (req, res) => {
  res.status(200).json({ success: true, data: products }); // {id, title, description, price, category, image, rating}
});

app.get("/api/v1/productdetails", (req, res) => {
  // {id, title, description, price }
  const limitedProperties = products.map(
    ({ id, title, description, price }) => {
      return {
        id,
        title,
        description,
        price,
      };
    }
  );
  //   console.log(products);
  //   console.log(limitedProperties);
  res.status(200).json({ success: true, data: limitedProperties });
});

// params and query
// params => /api/v1/products/:pid/ratings/:rid => {pid:..., rid:...}
app.get("/api/v1/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params; // {id: 1}
  const findProduct = products.find((product) => product.id === +id);
  if (!findProduct)
    return res
      .status(404)
      .json({ success: false, message: `No product with the id: ${id}` });
  res.status(200).json({ success: true, data: findProduct });
});

app.get("/api/v1/product/query", (req, res) => {
  const { search, limit } = req.query; // {search: "mens", limit: 5}
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(search)
  );
  if (filteredProducts.length >= 1) {
    let limitedProducts = filteredProducts.slice(0, limit);
    res.status(200).json({ success: true, data: limitedProducts });
  } else {
    res.status(200).json({ success: true, data: filteredProducts });
  }
});

// Listen
app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});

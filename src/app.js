"use strict";

const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");

const app = express();

// Conecta no banco
mongoose.connect(config.connectionString);

// Carrega as rotas
const indexRoute = require("./rotes/index-route");
const productRoute = require("./rotes/product-route");
const customerRoute = require("./rotes/customer-route");
const orderRoute = require("./rotes/order-route");

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/customers", customerRoute);
app.use("/orders", orderRoute);

module.exports = app;

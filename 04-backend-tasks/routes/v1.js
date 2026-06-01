const express = require('express');
const v1Router = express.Router();
const domainRouter = express.Router();
const { checkAdmin } = require('../middlewares/auth');

v1Router.get('/user', (req, res) => {
  res.send("success v1");
});

domainRouter.get('/todos', (req, res) => {
  res.json({ message: "List of all current todos" });
});

domainRouter.delete('/todos/:id', checkAdmin, (req, res) => {
  res.json({ message: "Todo item " + req.params.id + " deleted by admin" });
});

v1Router.use('/domain', domainRouter);

module.exports = v1Router;

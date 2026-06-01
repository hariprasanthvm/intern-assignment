const express = require('express');
const app = express();
const { requestLogger, apiLogsCollection } = require('./middlewares/logger');
const v1Router = require('./routes/v1');

app.use(express.json());
app.use(requestLogger);

const apiRouter = express.Router();
apiRouter.use('/v1', v1Router);

apiRouter.get('/v2/user', (req, res) => {
  res.send("success v2");
});

app.use('/api', apiRouter);

app.get('/view-logs', (req, res) => {
  res.json(apiLogsCollection);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server listening cleanly on port " + PORT);
});

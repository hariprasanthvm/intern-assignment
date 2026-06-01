const apiLogsCollection = [];

const requestLogger = (req, res, next) => {
  console.log("Accessing route path: " + req.originalUrl);

  const oldSend = res.send;
  let resBody;

  res.send = function(data) {
    resBody = data;
    return oldSend.apply(res, arguments);
  };

  res.on('finish', () => {
    const logData = {
      time: new Date(),
      method: req.method,
      url: req.originalUrl,
      reqBody: req.body,
      status: res.statusCode,
      resBody: resBody
    };
    apiLogsCollection.push(logData);
    console.log("Inserted new log into apilogs collection:", logData);
  });

  next();
};

module.exports = { requestLogger, apiLogsCollection };

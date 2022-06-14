const cacheMiddleware =
  ({ cache }) =>
  async (req, res, next) => {
    let oldSend = res.send;

    const cachedResponse = await cache.get(req.originalUrl);
    if (cachedResponse) {
      return res.send(JSON.parse(cachedResponse));
    }
    res.send = (response) => {
      if (JSON.parse(response).success) {
        cache.set(req.originalUrl, response, "ex", 3600);
      }

      res.send = oldSend;
      return res.send(response);
    };
    next();
  };

export default cacheMiddleware;

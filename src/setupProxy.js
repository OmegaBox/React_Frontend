const { createProxyMiddleware } = require("http-proxy-middleware");

// src/setupProxy.js
module.exports = (app) => {

  app.use(
    createProxyMiddleware("/movies", {
      target: "https://www.omegabox.xyz",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/movies/detail", {
      target: "https://www.omegabox.xyz",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/theaters", {
      target: "https://www.omegabox.xyz",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/schedules", {
      target: "https://www.omegabox.xyz/theaters",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/members/", {
      target: "https://www.omegabox.xyz",
      changeOrigin: true,
    })
  );
};

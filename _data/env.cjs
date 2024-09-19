module.exports = function () {
  return {
    environment: process.env.PROD_MODE || "development",
  };
}
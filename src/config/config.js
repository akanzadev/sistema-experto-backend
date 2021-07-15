require("dotenv").config({ path: "src/envs/dev.env" });
const config = {
  api: {
    PORT: process.env.PORT || 7800,
  },
  jwt: {
    SEED: process.env.JWT_SEED || "DEV",
    JWT_EXPIRED: process.env.JWT_EXPIRED || 2000,
  },
};

module.exports = config;

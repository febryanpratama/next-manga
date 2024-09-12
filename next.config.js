// Import the 'dotenv' package to load environment variables
const { config } = require("dotenv");

// Load the environment variables from the .env file
config();

/** @type {import("next").NextConfig} */
const nextConfig = {
  // Include your custom configuration here
  images: {
    domains: [
      "assets.tripay.co.id",
      "komikindo.tv",
      "5ln1h5525y2q.kentut.xyz",
      "komikindo.ws"
    ] // Allow these domains to serve images
  },

  // Optional: You can expose environment variables to the client side
  env: {
    BASE_URL: process.env.BASE_URL,
    JWT_SECRET: process.env.JWT_SECRET
  }
};

module.exports = nextConfig;

import dotenv from "dotenv";
const env = dotenv.config(); // parses .env file and stores all variables in process.env

console.log("Loaded Env Config:", env);

export const config = {
  DB_MONGO_URL: process.env.DB_MONGO_URL,
};

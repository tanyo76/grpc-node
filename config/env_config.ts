import dotenv from "dotenv";

dotenv.config();

const env_config = {
  grpc_server_url: process.env.GRPC_SERVER_URL as string,
  grpc_server_port: process.env.GRPC_SERVER_PORT as string,
  jwt_secret: process.env.JWT_SECRET as string,
  jwt_expiration_time: process.env.JWT_EXPIRATION_TIME as string,
};

export default env_config;

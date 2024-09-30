import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
import clients from "../data/clients";
import { ServerUnaryCall } from "@grpc/grpc-js";
import env_config from "../config/env_config";

// base64 encoded
const jwtSignSecret = btoa(env_config.jwt_secret);

export const authenticate = (clientId: string, clientSecret: string) => {
  const foundClient = clients.find(
    (client) =>
      client.clientId == clientId && client.clientSecret == clientSecret
  );

  if (!foundClient) {
    throw Error("Invalid credentials");
  }

  return jsonwebtoken.sign({ clientId: foundClient.clientId }, jwtSignSecret, {
    expiresIn: env_config.jwt_expiration_time,
  });
};

interface IJwtPayload {
  clientId: string;
  iat: number;
  exp: number;
}

export const validateAccessToken = (call: ServerUnaryCall<any, any>) => {
  try {
    const bearerToken = getAuthHeader(call);
    const token = bearerToken.split(" ")[1];
    const payload = jsonwebtoken.verify(token, jwtSignSecret) as IJwtPayload;

    const client = clients.find(
      (client) => client.clientId == payload.clientId
    );

    return client;
  } catch (err) {
    throw Error("Unathorized");
  }
};

export const getAuthHeader = (call: ServerUnaryCall<any, any>) => {
  return call.metadata.get("authorization")[0].toString();
};

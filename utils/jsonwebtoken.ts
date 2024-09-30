import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
import clients from "../data/clients";
import { ServerUnaryCall } from "@grpc/grpc-js";

// base64 encoded
const signSecret = btoa("Test@123");

export const authenticate = (clientId: string, clientSecret: string) => {
  const foundClient = clients.find(
    (client) =>
      client.clientId == clientId && client.clientSecret == clientSecret
  );

  if (!foundClient) {
    throw Error("Invalid credentials");
  }

  return jsonwebtoken.sign({ clientId: foundClient.clientId }, signSecret, {
    expiresIn: "1h",
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
    const payload = jsonwebtoken.verify(token, signSecret) as IJwtPayload;

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

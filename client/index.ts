import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

import { ProtoGrpcType } from "../proto/random";
import env_config from "../config/env_config";

const PROTO_FILE = "../proto/random.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE), {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const packageObject = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const RandomService = packageObject.random.Random;
const CustomerService = packageObject.customer.CustomerService;
const AuthenticateService = packageObject.authenticate.Authenticate;

export const randomStub = new RandomService(
  env_config.grpc_server_url,
  grpc.credentials.createInsecure()
);

export const authStub = new AuthenticateService(
  env_config.grpc_server_url,
  grpc.credentials.createInsecure()
);

var meta = new grpc.Metadata();

export const customerStub = new CustomerService(
  env_config.grpc_server_url,
  grpc.credentials.createInsecure()
);

authStub.Authenticate({ clientId: "fmi", clientSecret: "fmi" }, (err, data) => {
  console.log("Bearer token", data);
  const bearerToken = `Bearer ${data?.bearerToken}`;

  meta.add("authorization", bearerToken);

  randomStub.GetUsers({}, meta, (err, data) => {
    if (err) {
      return console.log(err);
    }

    console.log(data);
  });
});

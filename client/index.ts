import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

import { ProtoGrpcType } from "../proto/random";

// The proto file is responsible for serializing the data before sending
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
  "localhost:8000",
  grpc.credentials.createInsecure()
);

export const authStub = new AuthenticateService(
  "localhost:8000",
  grpc.credentials.createInsecure()
);

export const customerStub = new CustomerService(
  "localhost:8000",
  grpc.credentials.createInsecure()
);

authStub.Authenticate({ clientId: "fmi", clientSecret: "fmi" }, (err, data) => {
  console.log(data);
});

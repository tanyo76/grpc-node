import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import readline from "readline";

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

export const randomService = new RandomService(
  "localhost:8000",
  grpc.credentials.createInsecure()
);

export const customerService = new CustomerService(
  "localhost:8000",
  grpc.credentials.createInsecure()
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Tell me your name: ", (name) => {
  randomService.SayHello({ name }, (err, data) => {
    console.log(data?.message);

    rl.close();
  });
});

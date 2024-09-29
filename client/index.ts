import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

import { ProtoGrpcType } from "../proto/random";

const PROTO_FILE = "../proto/random.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE), {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const RandomService = (
  grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType
).random.Random;

const client = new RandomService(
  "localhost:8000",
  grpc.credentials.createInsecure()
);

client.SayHello({ name: "Tanyo" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

client.GetUsers({}, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

export default client;

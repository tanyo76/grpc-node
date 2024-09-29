import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

import { ProtoGrpcType } from "../proto/random";
import { RandomHandlers } from "../proto/random/Random";
import { User } from "../proto/random/User";
import { CustomerServiceHandlers } from "../proto/customer/CustomerService";

const serverPort = 8000;

const PROTO_FILE = "../proto/random.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));

const grpcObject = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const users: User[] = [
  { id: "1", name: "Tanyo", age: 24 },
  { id: "2", name: "Gergana", age: 22 },
];

function main() {
  // The server is responsible for deserialization of the incoming data and call
  const server = new grpc.Server();

  // Random Service
  // proto file ---> package
  server.addService(grpcObject.random.Random.service, {
    SayHello: (call, callback) => {
      if (call.request.name) {
        const { name } = call.request;
        callback(null, { message: `Hello, ${name}` });
      }
    },
    GetUsers: (call, callback) => {
      callback(null, { users });
    },
  } as RandomHandlers);

  // Customer Service (imported in the random.proto file)
  server.addService(
    grpcObject.customer.CustomerService.service,
    {} as CustomerServiceHandlers
  );

  server.bindAsync(
    `localhost:${serverPort}`,
    grpc.ServerCredentials.createInsecure(), // without SSL
    (err, port) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(`Your server has started on port: ${port}`);
      server.start();
    }
  );
}

main();

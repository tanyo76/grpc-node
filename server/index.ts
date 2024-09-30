import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { ReflectionService } from "@grpc/reflection";

import { ProtoGrpcType } from "../proto/random";
import { RandomHandlers } from "../proto/random/Random";
import { CustomerServiceHandlers } from "../proto/customer/CustomerService";
import { AuthenticateHandlers } from "../proto/authenticate/Authenticate";
import { authenticate, validateAccessToken } from "../utils/jsonwebtoken";
import { users } from "../data/users";
import env_config from "../config/env_config";

const PROTO_FILE = "../proto/random.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));

const grpcObject = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

function main() {
  const server = new grpc.Server();
  const reflection = new ReflectionService(packageDef);

  reflection.addToServer(server);

  server.addService(grpcObject.random.Random.service, {
    SayHello: (call, callback) => {
      if (call.request.name) {
        const { name } = call.request;
        callback(null, { message: `Hello, ${name}` });
      }
    },
    GetUsers: (call, callback) => {
      try {
        const client = validateAccessToken(call);
        callback(null, { users });
      } catch (err: any) {
        callback({ code: grpc.status.UNAUTHENTICATED, message: err.message });
      }
    },
  } as RandomHandlers);

  // Customer Service (imported in the random.proto file)
  server.addService(
    grpcObject.customer.CustomerService.service,
    {} as CustomerServiceHandlers
  );

  server.addService(grpcObject.authenticate.Authenticate.service, {
    Authenticate: (call, callback) => {
      try {
        if (call.request.clientId && call.request.clientSecret) {
          const { clientId, clientSecret } = call.request;
          const accessToken = authenticate(clientId, clientSecret);

          callback(null, { bearerToken: accessToken });
        } else {
          throw Error("Missing required fields");
        }
      } catch (err: any) {
        return callback({
          code: grpc.status.INVALID_ARGUMENT,
          message: err.message,
        });
      }
    },
  } as AuthenticateHandlers);

  server.bindAsync(
    `localhost:${env_config.grpc_server_port}`,
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

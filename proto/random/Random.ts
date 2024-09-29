// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _random_Empty, Empty__Output as _random_Empty__Output } from '../random/Empty';
import type { SayHelloRequest as _random_SayHelloRequest, SayHelloRequest__Output as _random_SayHelloRequest__Output } from '../random/SayHelloRequest';
import type { SayHelloResponse as _random_SayHelloResponse, SayHelloResponse__Output as _random_SayHelloResponse__Output } from '../random/SayHelloResponse';
import type { UserList as _random_UserList, UserList__Output as _random_UserList__Output } from '../random/UserList';

export interface RandomClient extends grpc.Client {
  GetUsers(argument: _random_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_random_UserList__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _random_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_random_UserList__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _random_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_random_UserList__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _random_Empty, callback: grpc.requestCallback<_random_UserList__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _random_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_random_UserList__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _random_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_random_UserList__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _random_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_random_UserList__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _random_Empty, callback: grpc.requestCallback<_random_UserList__Output>): grpc.ClientUnaryCall;
  
  SayHello(argument: _random_SayHelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_random_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _random_SayHelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_random_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _random_SayHelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_random_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _random_SayHelloRequest, callback: grpc.requestCallback<_random_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _random_SayHelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_random_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _random_SayHelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_random_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _random_SayHelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_random_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _random_SayHelloRequest, callback: grpc.requestCallback<_random_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  GetUsers: grpc.handleUnaryCall<_random_Empty__Output, _random_UserList>;
  
  SayHello: grpc.handleUnaryCall<_random_SayHelloRequest__Output, _random_SayHelloResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  GetUsers: MethodDefinition<_random_Empty, _random_UserList, _random_Empty__Output, _random_UserList__Output>
  SayHello: MethodDefinition<_random_SayHelloRequest, _random_SayHelloResponse, _random_SayHelloRequest__Output, _random_SayHelloResponse__Output>
}

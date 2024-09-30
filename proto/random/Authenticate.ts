// Original file: proto/authenticate.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AuthenticateResponse as _random_AuthenticateResponse, AuthenticateResponse__Output as _random_AuthenticateResponse__Output } from '../random/AuthenticateResponse';
import type { ClientCredentialRequest as _random_ClientCredentialRequest, ClientCredentialRequest__Output as _random_ClientCredentialRequest__Output } from '../random/ClientCredentialRequest';

export interface AuthenticateClient extends grpc.Client {
  Authenticate(argument: _random_ClientCredentialRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_random_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Authenticate(argument: _random_ClientCredentialRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_random_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Authenticate(argument: _random_ClientCredentialRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_random_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Authenticate(argument: _random_ClientCredentialRequest, callback: grpc.requestCallback<_random_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _random_ClientCredentialRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_random_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _random_ClientCredentialRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_random_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _random_ClientCredentialRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_random_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _random_ClientCredentialRequest, callback: grpc.requestCallback<_random_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthenticateHandlers extends grpc.UntypedServiceImplementation {
  Authenticate: grpc.handleUnaryCall<_random_ClientCredentialRequest__Output, _random_AuthenticateResponse>;
  
}

export interface AuthenticateDefinition extends grpc.ServiceDefinition {
  Authenticate: MethodDefinition<_random_ClientCredentialRequest, _random_AuthenticateResponse, _random_ClientCredentialRequest__Output, _random_AuthenticateResponse__Output>
}

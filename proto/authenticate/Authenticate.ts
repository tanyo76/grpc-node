// Original file: proto/authenticate.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AuthenticateResponse as _authenticate_AuthenticateResponse, AuthenticateResponse__Output as _authenticate_AuthenticateResponse__Output } from '../authenticate/AuthenticateResponse';
import type { ClientCredentialRequest as _authenticate_ClientCredentialRequest, ClientCredentialRequest__Output as _authenticate_ClientCredentialRequest__Output } from '../authenticate/ClientCredentialRequest';

export interface AuthenticateClient extends grpc.Client {
  Authenticate(argument: _authenticate_ClientCredentialRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authenticate_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Authenticate(argument: _authenticate_ClientCredentialRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authenticate_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Authenticate(argument: _authenticate_ClientCredentialRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authenticate_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Authenticate(argument: _authenticate_ClientCredentialRequest, callback: grpc.requestCallback<_authenticate_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _authenticate_ClientCredentialRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authenticate_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _authenticate_ClientCredentialRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authenticate_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _authenticate_ClientCredentialRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authenticate_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _authenticate_ClientCredentialRequest, callback: grpc.requestCallback<_authenticate_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthenticateHandlers extends grpc.UntypedServiceImplementation {
  Authenticate: grpc.handleUnaryCall<_authenticate_ClientCredentialRequest__Output, _authenticate_AuthenticateResponse>;
  
}

export interface AuthenticateDefinition extends grpc.ServiceDefinition {
  Authenticate: MethodDefinition<_authenticate_ClientCredentialRequest, _authenticate_AuthenticateResponse, _authenticate_ClientCredentialRequest__Output, _authenticate_AuthenticateResponse__Output>
}

import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthenticateClient as _authenticate_AuthenticateClient, AuthenticateDefinition as _authenticate_AuthenticateDefinition } from './authenticate/Authenticate';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  authenticate: {
    Authenticate: SubtypeConstructor<typeof grpc.Client, _authenticate_AuthenticateClient> & { service: _authenticate_AuthenticateDefinition }
    AuthenticateResponse: MessageTypeDefinition
    ClientCredentialRequest: MessageTypeDefinition
  }
}


import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthenticateClient as _authenticate_AuthenticateClient, AuthenticateDefinition as _authenticate_AuthenticateDefinition } from './authenticate/Authenticate';
import type { CustomerServiceClient as _customer_CustomerServiceClient, CustomerServiceDefinition as _customer_CustomerServiceDefinition } from './customer/CustomerService';
import type { RandomClient as _random_RandomClient, RandomDefinition as _random_RandomDefinition } from './random/Random';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  authenticate: {
    Authenticate: SubtypeConstructor<typeof grpc.Client, _authenticate_AuthenticateClient> & { service: _authenticate_AuthenticateDefinition }
    AuthenticateResponse: MessageTypeDefinition
    ClientCredentialRequest: MessageTypeDefinition
  }
  customer: {
    Customer: MessageTypeDefinition
    CustomerList: MessageTypeDefinition
    CustomerRequestId: MessageTypeDefinition
    CustomerService: SubtypeConstructor<typeof grpc.Client, _customer_CustomerServiceClient> & { service: _customer_CustomerServiceDefinition }
    Empty: MessageTypeDefinition
  }
  random: {
    Empty: MessageTypeDefinition
    Random: SubtypeConstructor<typeof grpc.Client, _random_RandomClient> & { service: _random_RandomDefinition }
    SayHelloRequest: MessageTypeDefinition
    SayHelloResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    UserList: MessageTypeDefinition
  }
}


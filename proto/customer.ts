import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CustomerServiceClient as _customer_CustomerServiceClient, CustomerServiceDefinition as _customer_CustomerServiceDefinition } from './customer/CustomerService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  customer: {
    Customer: MessageTypeDefinition
    CustomerList: MessageTypeDefinition
    CustomerRequestId: MessageTypeDefinition
    CustomerService: SubtypeConstructor<typeof grpc.Client, _customer_CustomerServiceClient> & { service: _customer_CustomerServiceDefinition }
    Empty: MessageTypeDefinition
  }
}


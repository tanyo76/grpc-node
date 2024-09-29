// Original file: proto/customer.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Customer as _customer_Customer, Customer__Output as _customer_Customer__Output } from '../customer/Customer';
import type { CustomerList as _customer_CustomerList, CustomerList__Output as _customer_CustomerList__Output } from '../customer/CustomerList';
import type { CustomerRequestId as _customer_CustomerRequestId, CustomerRequestId__Output as _customer_CustomerRequestId__Output } from '../customer/CustomerRequestId';
import type { Empty as _customer_Empty, Empty__Output as _customer_Empty__Output } from '../customer/Empty';

export interface CustomerServiceClient extends grpc.Client {
  Get(argument: _customer_CustomerRequestId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  Get(argument: _customer_CustomerRequestId, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  Get(argument: _customer_CustomerRequestId, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  Get(argument: _customer_CustomerRequestId, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  get(argument: _customer_CustomerRequestId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  get(argument: _customer_CustomerRequestId, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  get(argument: _customer_CustomerRequestId, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  get(argument: _customer_CustomerRequestId, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  
  GetAll(argument: _customer_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_CustomerList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _customer_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_CustomerList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _customer_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_CustomerList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _customer_Empty, callback: grpc.requestCallback<_customer_CustomerList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _customer_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_CustomerList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _customer_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_CustomerList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _customer_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_CustomerList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _customer_Empty, callback: grpc.requestCallback<_customer_CustomerList__Output>): grpc.ClientUnaryCall;
  
  Insert(argument: _customer_Customer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  Insert(argument: _customer_Customer, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  Insert(argument: _customer_Customer, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  Insert(argument: _customer_Customer, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  insert(argument: _customer_Customer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  insert(argument: _customer_Customer, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  insert(argument: _customer_Customer, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  insert(argument: _customer_Customer, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  
  Remove(argument: _customer_CustomerRequestId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Empty__Output>): grpc.ClientUnaryCall;
  Remove(argument: _customer_CustomerRequestId, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_Empty__Output>): grpc.ClientUnaryCall;
  Remove(argument: _customer_CustomerRequestId, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Empty__Output>): grpc.ClientUnaryCall;
  Remove(argument: _customer_CustomerRequestId, callback: grpc.requestCallback<_customer_Empty__Output>): grpc.ClientUnaryCall;
  remove(argument: _customer_CustomerRequestId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Empty__Output>): grpc.ClientUnaryCall;
  remove(argument: _customer_CustomerRequestId, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_Empty__Output>): grpc.ClientUnaryCall;
  remove(argument: _customer_CustomerRequestId, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Empty__Output>): grpc.ClientUnaryCall;
  remove(argument: _customer_CustomerRequestId, callback: grpc.requestCallback<_customer_Empty__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _customer_Customer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  Update(argument: _customer_Customer, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  Update(argument: _customer_Customer, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  Update(argument: _customer_Customer, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  update(argument: _customer_Customer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  update(argument: _customer_Customer, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  update(argument: _customer_Customer, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  update(argument: _customer_Customer, callback: grpc.requestCallback<_customer_Customer__Output>): grpc.ClientUnaryCall;
  
}

export interface CustomerServiceHandlers extends grpc.UntypedServiceImplementation {
  Get: grpc.handleUnaryCall<_customer_CustomerRequestId__Output, _customer_Customer>;
  
  GetAll: grpc.handleUnaryCall<_customer_Empty__Output, _customer_CustomerList>;
  
  Insert: grpc.handleUnaryCall<_customer_Customer__Output, _customer_Customer>;
  
  Remove: grpc.handleUnaryCall<_customer_CustomerRequestId__Output, _customer_Empty>;
  
  Update: grpc.handleUnaryCall<_customer_Customer__Output, _customer_Customer>;
  
}

export interface CustomerServiceDefinition extends grpc.ServiceDefinition {
  Get: MethodDefinition<_customer_CustomerRequestId, _customer_Customer, _customer_CustomerRequestId__Output, _customer_Customer__Output>
  GetAll: MethodDefinition<_customer_Empty, _customer_CustomerList, _customer_Empty__Output, _customer_CustomerList__Output>
  Insert: MethodDefinition<_customer_Customer, _customer_Customer, _customer_Customer__Output, _customer_Customer__Output>
  Remove: MethodDefinition<_customer_CustomerRequestId, _customer_Empty, _customer_CustomerRequestId__Output, _customer_Empty__Output>
  Update: MethodDefinition<_customer_Customer, _customer_Customer, _customer_Customer__Output, _customer_Customer__Output>
}

import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RandomClient as _random_RandomClient, RandomDefinition as _random_RandomDefinition } from './random/Random';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  random: {
    Empty: MessageTypeDefinition
    Random: SubtypeConstructor<typeof grpc.Client, _random_RandomClient> & { service: _random_RandomDefinition }
    SayHelloRequest: MessageTypeDefinition
    SayHelloResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    UserList: MessageTypeDefinition
  }
}


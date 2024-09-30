interface IClientsObject {
  clientId: string;
  clientSecret: string;
}

const clients: IClientsObject[] = [
  { clientId: "fmi", clientSecret: "fmi" },
  { clientId: "fmi2", clientSecret: "fmi2" },
];

export default clients;

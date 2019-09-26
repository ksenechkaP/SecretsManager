export class Secret {
  constructor(public id: string, public secretName: string, public secretText: string, public allowExport: boolean) {}
}

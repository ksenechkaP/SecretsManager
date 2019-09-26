export class Secret {
  constructor(public secretId: string, public secretName: string, public secretText: string, public allowExport: boolean) {}
}

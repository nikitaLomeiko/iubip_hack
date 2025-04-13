export interface ISessionItem {
  name: string;
  serverId: string;
  history: Uint8Array<ArrayBufferLike>[];
}

import { makeAutoObservable } from "mobx";
import { IServerItem } from "../types";

interface IInitialState {
  servers: IServerItem[];
}

class ServerStore {
  state: IInitialState = {
    servers: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  addListServer(servers: IServerItem[]) {
    this.state.servers = servers;
  }

  addNewServer(servers: IServerItem) {
    this.state.servers.push(servers);
  }

  deleteServer(name: string) {
    this.state.servers = this.state.servers.filter((server) => server.name !== name);
  }
}

export const serverStore = new ServerStore();

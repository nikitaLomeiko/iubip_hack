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
    this.state.servers = [...this.state.servers, ...servers];
  }

  addNewServer(servers: IServerItem) {
    this.state.servers.push(servers);
  }

  deleteServer(id: number) {
    this.state.servers = this.state.servers.filter((server) => server.id !== id);
  }

  changeReview(server: IServerItem) {
    console.log(server.id);
    console.log(this.state.servers);
    const index = this.state.servers.findIndex((s) => s.id === server.id);
    if (index > -1) {
      this.state.servers[index] = server;
    }
  }
}

export const serverStore = new ServerStore();

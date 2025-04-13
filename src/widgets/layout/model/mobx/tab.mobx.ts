import { makeAutoObservable } from "mobx";

interface IInitialState {
  tab: "sessions" | "servers" | "keys";
}

class TabStore {
  state: IInitialState = {
    tab: "sessions",
  };

  constructor() {
    makeAutoObservable(this);
  }

  changeTab(tab: "sessions" | "servers" | "keys") {
    this.state.tab = tab;
  }
}

export const tabStore = new TabStore();

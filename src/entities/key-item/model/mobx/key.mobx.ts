import { makeAutoObservable } from "mobx";
import { IKeyItem } from "../types";

interface IInitialState {
  keys: IKeyItem[];
}

class KeyStore {
  state: IInitialState = {
    keys: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  addListKeys(keys: IKeyItem[]) {
    this.state.keys = keys;
  }

  addNewKey(key: IKeyItem) {
    this.state.keys.push(key);
  }

  deleteKey(name: string) {
    this.state.keys = this.state.keys.filter((key) => key.name !== name);
  }
}

export const keyStrore = new KeyStore();

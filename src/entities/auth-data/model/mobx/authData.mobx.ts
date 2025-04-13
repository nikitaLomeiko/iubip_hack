import { makeAutoObservable } from "mobx";

interface IInitialState {
  isAuth: boolean;
}

class AuthDataStore {
  state: IInitialState = {
    isAuth: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setAuth() {
    this.state.isAuth = true;
  }
}

export const authDataStore = new AuthDataStore();

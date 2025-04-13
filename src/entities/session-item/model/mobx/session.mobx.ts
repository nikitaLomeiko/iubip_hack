import { makeAutoObservable } from "mobx";
import { ISessionItem } from "../types";

interface IInitialState {
  sessions: ISessionItem[];
}

class SessionStore {
  state: IInitialState = {
    sessions: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  addListSessions(sessions: ISessionItem[]) {
    this.state.sessions = sessions;
  }

  addNewSession(session: ISessionItem) {
    this.state.sessions.push(session);
  }

  saveTerminal(name: string, history: Uint8Array<ArrayBufferLike>) {
    const index = this.state.sessions.findIndex((s) => s.name === name);
    if (index > -1) {
      if (!this.state.sessions[index].history) {
        this.state.sessions[index].history = [];
      }
      this.state.sessions[index].history.push(history);
    }
  }

  deleteSession(name: string) {
    this.state.sessions = this.state.sessions.filter((session) => session.name !== name);
  }
}

export const sessionStore = new SessionStore();

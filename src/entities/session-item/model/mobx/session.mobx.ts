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

  deleteSession(name: string) {
    this.state.sessions = this.state.sessions.filter((session) => session.name !== name);
  }

  changeSession(name: string, session: ISessionItem) {
    const index = this.state.sessions.findIndex((s) => s.name === name);
    console.log(session);
    if (index > -1) {
      this.state.sessions[index] = session;
    }
  }
}

export const sessionStore = new SessionStore();

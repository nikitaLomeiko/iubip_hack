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
    this.state.sessions = [...this.state.sessions, ...sessions];
  }

  addNewSession(session: ISessionItem) {
    this.state.sessions.push(session);
  }

  deleteSession(id: number) {
    this.state.sessions = this.state.sessions.filter((session) => session.id !== id);
  }

  changeSession(session: ISessionItem) {
    const index = this.state.sessions.findIndex((session) => session.id === session.id);
    if (index > -1) {
      this.state.sessions[index] = session;
    }
  }
}

export const sessionStore = new SessionStore();

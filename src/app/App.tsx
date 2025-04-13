import { Suspense, useEffect } from "react";
import { Routing } from "./providers/routing";
import "./styles/index.css";
import { ISessionItem, sessionStore } from "entities/session-item";

function App() {
  useEffect(() => {
    const requestGetSessions = async () => {
      const data: ISessionItem[] = await fetch("https://ыыыы.спб.рф/api/servers/{srvid}/sessions/", {
        method: "GET",
        credentials: "include",
      }).then((data) => data.json());
      sessionStore.addListSessions(data);
    };

    const requestGetAuthData = async () => {
      await fetch("https://ыыыы.спб.рф/api/auth/", {
        method: "GET",
        credentials: "include",
      });
    };

    requestGetAuthData();
    requestGetSessions();
  }, []);

  return (
    <Suspense fallback="Загрузка...">
      <Routing />
    </Suspense>
  );
}

export default App;

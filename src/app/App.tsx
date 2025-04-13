import { Suspense, useEffect } from "react";
import { Routing } from "./providers/routing";
import "./styles/index.css";
import { ISessionItem, sessionStore } from "entities/session-item";

function App() {
  useEffect(() => {
    const requestGetSessions = async () => {
      const data: ISessionItem[] = await fetch("http://ыыыы.спб.рф:8088/servers/{srvid}/sessions/", {
        method: "GET"
      }).then((data) => data.json());
      sessionStore.addListSessions(data);
    };

    requestGetSessions();
  }, []);

  return (
    <Suspense fallback="Загрузка...">
        <Routing />
    </Suspense>
  );
}

export default App;

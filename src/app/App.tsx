import { Suspense, useEffect } from "react";
import { Routing } from "./providers/routing";
import "./styles/index.css";
import { ISessionItem, sessionStore } from "entities/session-item";

function App() {

  useEffect(() => {
    const request = async () => {
      const data: ISessionItem[] = await fetch("http://45.10.41.195:8088/servers/{srvid}/sessions", {
        method: "GET",
      }).then((data) => data.json());
      sessionStore.addListSessions(data);
    };

    request();
  }, []);

  return (
    <Suspense fallback="Загрузка...">
      <Routing />
    </Suspense>
  );
}

export default App;

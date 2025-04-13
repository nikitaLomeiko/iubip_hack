import { Suspense, useEffect } from "react";
import { Routing } from "./providers/routing";
import "./styles/index.css";
import { ISessionItem, sessionStore } from "entities/session-item";
import { IKeyItem, keyStrore } from "entities/key-item";
import { serverStore } from "entities/server-item";

function App() {
  useEffect(() => {
    const request = async () => {
      const sessions: ISessionItem[] = await fetch("http://ыыыы.спб.рф:8088/servers/{srvid}/sessions/", {
        method: "GET"
      }).then((data) => data.json());

      const keys: IKeyItem[] = await fetch("http://ыыыы.спб.рф:8088/keys/", {
        method: "GET"
      }).then((data) => data.json()).then((data) => Object.values(data)); 

      const servers: ISessionItem[] = await fetch("http://ыыыы.спб.рф:8088/servers/", {
        method: "GET"
      }).then((data) => data.json());
      sessionStore.addListSessions(sessions);
      keyStrore.addListKeys(keys)
      serverStore.addListServer(servers)
    };

    request();
  }, [])

  return (
    <Suspense fallback="Загрузка...">
        <Routing />
    </Suspense>
  );
}

export default App;

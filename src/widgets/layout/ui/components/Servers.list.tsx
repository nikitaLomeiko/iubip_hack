import { ServerItem, serverStore } from "entities/server-item";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { RoutePath } from "shared/config/route";

export const ServersList: React.FC = observer(() => {
  const {
    state: { servers },
  } = serverStore;

  const navigate = useNavigate()

  return (
    <ul className="flex flex-col gap-4 px-4">
      {servers.length === 0 && <p className="!text-white/40 !text-center !w-full">Серверов не найдено</p>}
      {servers.map((item) => (
        <li>
          <ServerItem
            key={item.id}
            server={item}
            onClick={() => navigate(`${RoutePath.server.path}/${item.id}`)}
            onRemove={() => serverStore.deleteServer(item.id || 0)}
          />
        </li>
      ))}
    </ul>
  );
});

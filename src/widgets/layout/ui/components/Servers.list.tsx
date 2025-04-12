import { ServerItem, serverStore } from "entities/server-item";
import { observer } from "mobx-react-lite";

export const ServersList: React.FC = observer(() => {
  const {
    state: { servers },
  } = serverStore;

  return (
    <ul className="flex flex-col gap-4 px-4">
      {servers.length === 0 && <p className="!text-white/40 !text-center !w-full">Серверов не найдено</p>}
      {servers.map((item) => (
        <li>
          {item.id}
          <ServerItem
            key={item.id}
            server={item}
            onClick={() => null}
            onRemove={() => serverStore.deleteServer(item.id)}
          />
        </li>
      ))}
    </ul>
  );
});

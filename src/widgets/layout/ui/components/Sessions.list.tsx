import { ISessionItem, SessionItem, sessionStore } from "entities/session-item";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { RoutePath } from "shared/config/route";

export const SessionsList: React.FC = observer(() => {
  const {
    state: { sessions },
  } = sessionStore;

  const navigate = useNavigate();

  return (
    <ul className="flex flex-col gap-4 px-4">
      {sessions.length === 0 && <p className="!text-white/40 !w-full !text-center">Сессий нет</p>}
      {sessions.map((item) => (
        <li>
          <SessionItem
            value={item.name}
            onChange={(data) => sessionStore.changeSession(item.name,{ name: data, serverId: item.serverId })}
            onClick={() => navigate(`${RoutePath.home.path}/${item.name}`)}
            onRemove={() => sessionStore.deleteSession(item.name)}
          />
        </li>
      ))}
    </ul>
  );
});

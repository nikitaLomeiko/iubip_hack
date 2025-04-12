import { SessionItem, sessionStore } from "entities/session-item";
import { observer } from "mobx-react-lite";


export const SessionsList: React.FC = observer(() => {
  const {
    state: { sessions },
  } = sessionStore;

  return (
    <ul className="flex flex-col gap-4 px-4">
      {sessions.length === 0 && <p className="!text-white/40 !w-full !text-center">Сессий нет</p>}
      {sessions.map((item) => (
        <li>
          <SessionItem
            value={item.name}
            onChange={(data) => sessionStore.changeSession({ id: item.id, name: data })}
            onClick={() => null}
            onRemove={() => sessionStore.deleteSession(item.id)}
          />
        </li>
      ))}
    </ul>
  );
});

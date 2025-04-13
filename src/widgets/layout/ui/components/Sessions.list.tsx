import { SessionItem, sessionStore } from "entities/session-item";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router";
import { RoutePath } from "shared/config/route";

export const SessionsList: React.FC = observer(() => {
  const {
    state: { sessions },
  } = sessionStore;
  const { session } = useParams();
  const navigate = useNavigate();

  const handleRemove = async (name: string) => {
    await fetch(`http://ыыыы.спб.рф:8088/sessions/${name}`, { method: "DELETE" });
    sessionStore.deleteSession(name);
    navigate(RoutePath.home.path)
  };

  return (
    <ul className="flex flex-col">
      {sessions.length === 0 && <p className="!text-white/40 !w-full !text-center">Сессий нет</p>}
      {sessions.map((item) => (
        <li className={`px-4 py-1 transition-colors rounded-sm ${item.name === session && "bg-blue-600/40"}`}>
          <SessionItem
            value={item.name}
            onClick={() => navigate(`${RoutePath.home.path}/${item.name}`)}
            onRemove={() => handleRemove(item.name)}
          />
        </li>
      ))}
    </ul>
  );
});

import { keyStrore, KeyItem } from "entities/key-item";
import { observer } from "mobx-react-lite";

export const KeysList: React.FC = observer(() => {
  const {
    state: { keys },
  } = keyStrore;

  return (
    <ul className="flex flex-col gap-4 px-4">
      {keys.length === 0 && <p className="!text-white/40 !text-center !w-full">Ключей нет</p>}
      {keys.map((item) => (
        <li>
          <KeyItem
            key={item.name}
            keyItem={item}
            onRemove={() => keyStrore.deleteKey(item.name)}
          />
        </li>
      ))}
    </ul>
  );
});

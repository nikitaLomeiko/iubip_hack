import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  sessions: string[];
}

export const SessionsList: React.FC<IProps> = (props) => {
  const { sessions } = props;

  return (
    <ul className="flex flex-col gap-4 px-4">
      {sessions.map((item) => (
        <li>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center gap-2">
              <WatchLaterIcon className="!size-4 !fill-white/70" />
              <p className="!text-sm text-white/80">{item}</p>
            </div>
            <div className="flex flex-row gap-2">
              <button>
                <CreateIcon className="!size-4 !fill-white/40" />
              </button>
              <button>
                <DeleteIcon className="!size-4 !fill-white/40" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

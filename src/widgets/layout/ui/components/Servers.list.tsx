import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import StorageIcon from '@mui/icons-material/Storage';

interface IProps {
  servers: string[];
}

export const ServersList: React.FC<IProps> = (props) => {
  const { servers } = props;

  return (
    <ul className="flex flex-col gap-4 px-4">
      {servers.map((item) => (
        <li>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center gap-2">
              <StorageIcon className="!size-4 !fill-white/70" />
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

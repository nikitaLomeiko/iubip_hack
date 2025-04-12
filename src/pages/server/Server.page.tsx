import { IServerItem, ServerPreview } from "entities/server-item";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Layout } from "widgets/layout";

const ServerPage = () => {
  const { serverId } = useParams();

  const [server, setServer] = useState<IServerItem | null>(null);

  useEffect(() => {
    setServer({
      id: 12524,
      adress: "123.124.12.12:8080",
      name: "nikita.server.org",
      typeAuth: "key",
    });
  }, []);
  console.log(serverId);

  return (
    <div className="bg-gray-600 overflow-hidden">
      <Layout>
        <div className="bg-[#151719] h-full p-2">{server && <ServerPreview server={server} />}</div>
      </Layout>
    </div>
  );
};

export default ServerPage;

import { IServerItem, ServerPreview, serverStore } from "entities/server-item";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Layout } from "widgets/layout";

const ServerPage = () => {
  const { serverId } = useParams();

  const [server, setServer] = useState<IServerItem | null>(null);

  useEffect(() => {
    const server = serverStore.state.servers.find((item) => item.name === serverId);

    console.log(server)
    if (server) setServer(server);
  }, [serverId]);

  return (
    <div className="bg-gray-600 overflow-hidden">
      <Layout title="Server">
        <div className="bg-[#151719] h-full p-2">{server && <ServerPreview server={server} />}</div>
      </Layout>
    </div>
  );
};

export default ServerPage;

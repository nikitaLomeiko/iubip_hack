import { useParams } from "react-router";
import { Layout } from "widgets/layout";

const ServerPage = () => {
  const { serverId } = useParams();

  console.log(serverId);

  return (
    <div className="bg-gray-600 overflow-hidden">
      <Layout>
        <div className="bg-[#151719] h-full">хуй</div>
      </Layout>
    </div>
  );
};

export default ServerPage;

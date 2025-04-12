import { Terminal } from "features/terminal";
import { useParams } from "react-router";
import { Layout } from "widgets/layout";

const HomePage = () => {
  const {session} = useParams()

  console.log(session)
  return (
    <div className="bg-gray-600 overflow-hidden">
      <Layout>
        <div className="bg-[#151719] h-full">
          <Terminal/>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;

import { Terminal } from "features/terminal";
import { useParams } from "react-router";
import { Layout } from "widgets/layout";

const HomePage = () => {
  const {session} = useParams()

  console.log(session)
  return (
    <div className="bg-gray-600 overflow-hidden">
      <Layout title="terminal • MySession2">
        <div className="bg-[#151719] h-full overflow-hidden">
          <Terminal/>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;

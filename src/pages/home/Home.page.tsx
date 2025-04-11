import { Terminal } from "features/terminal";
import { Layout } from "widgets/layout";

const HomePage = () => {
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

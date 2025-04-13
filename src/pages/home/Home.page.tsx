import { sessionStore } from "entities/session-item";
import { Terminal } from "features/terminal";
import { useParams } from "react-router";
import { Layout } from "widgets/layout";

const HomePage = () => {
  const { session } = useParams();
  const {
    state: { sessions },
  } = sessionStore;

  return (
    <div className="bg-gray-600 overflow-hidden">
      <Layout title="terminal • MySession2">
        <div className="bg-[#151719] h-full overflow-hidden">
          {sessions.map((item) => (
            <>{session === item.name && <Terminal sessionName={session} />}</>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;

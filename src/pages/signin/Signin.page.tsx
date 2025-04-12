import { SignIn } from "features/auth";
import bgImg from "shared/assets/bg.jpg";
import TerminalIcon from "@mui/icons-material/Terminal";

const SignInPage = () => {
  return (
    <div className="overflow-hidden w-screen h-screen">
      <div
        className="bg-cover bg-repeat h-screen w-screen"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="w-full flex flex-row items-center gap-2 p-10">
          <TerminalIcon className="!size-10 !fill-white" />
          <h1 className="!m-0 !mb-2 w-full text-white">ысысаш</h1>
        </div>

        <div
          className="bg-white/85 h-screen w-[500px] px-20 absolute top-0 right-0"
        >
          <div className="w-full h-full flex items-center">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

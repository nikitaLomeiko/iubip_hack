import { SignIn } from "features/auth";
import bgImg from "shared/assets/bg.jpg";

const SignInPage = () => {
  return (
    <div className="overflow-hidden w-screen h-screen">
      <div
        className="bg-cover bg-repeat h-screen w-screen"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div
          className="bg-white/85 h-screen w-full lg:w-[500px] lg:px-20 px-5 absolute top-0 right-0"
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
